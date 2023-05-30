<cfsetting requesttimeout="99999999999">
<cfoutput>
	<cfquery name="dealsbanner" datasource="#application.murads#">
		select * from tcontent where PARENTID ='D220C91A-CB8C-BB01-11BAD78E24C9FFB0' and type ='Folder'
	</cfquery>
	<cfsavecontent variable="dealsbannercontent">
		export const deals =[
		<cfset itr=1>	
		<cfloop query="dealsbanner">
			{
				<cfquery name="subdealsbanner" datasource="#application.murads#">
					select * from tcontent where PARENTID = '#dealsbanner.CONTENTID#' and ACTIVE =1 order by ORDERNO
				</cfquery>
				<cfset subsli=1>
					"id":#itr#,
				<cfloop query="subdealsbanner">
						<cfif subsli eq 1>
							"img": #replacelist(subdealsbanner.BODY,'<p>,</p>',',')#,
						<cfelseif subsli eq 2>
							"Heading":"#replacelist(subdealsbanner.BODY,'<p>,</p>',',')#",
						<cfelseif subsli eq 3>
							"Logo":#replacelist(subdealsbanner.BODY,'<p>,</p>',',')#,
						</cfif>
					<cfif subsli lt subdealsbanner.recordcount></cfif><cfset subsli=subsli+1>
				</cfloop>
			}
			<cfif itr lt dealsbanner.recordcount>,</cfif><cfset itr=itr+1>
		</cfloop>
		]		
	</cfsavecontent>
 <cffile action="write" file="#application.webrootpath#data\DealsBannerContent.js" charset="utf-8" output="#dealsbannercontent#">
Done
</cfoutput>