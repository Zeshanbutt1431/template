<cfsetting requesttimeout="99999999999">
<cfoutput>
	<cfquery name="minibanner" datasource="#application.murads#">
		select * from tcontent where PARENTID ='050FFA96-F36A-E0E9-82DED88CE29D87B6' and type ='Folder'
	</cfquery>
	<cfsavecontent variable="minibannercontent">
		export const minibanners =[
		<cfset itr=1>	
		<cfloop query="minibanner">
			{
				<cfquery name="subminibanner" datasource="#application.murads#">
					select * from tcontent where PARENTID = '#minibanner.CONTENTID#' and ACTIVE =1 order by ORDERNO
				</cfquery>
				<cfset subsli=1>
					"id":#itr#,
				<cfloop query="subminibanner">
						<cfif subsli eq 1>
							"img": #replacelist(subminibanner.BODY,'<p>,</p>',',')#,
						<cfelseif subsli eq 2>
							"Heading":"#replacelist(subminibanner.BODY,'<p>,</p>',',')#",
						<cfelseif subsli eq 3>
							"URL":"#replacelist(subminibanner.BODY,'<p>,</p>',',')#",
						</cfif>
					<cfif subsli lt subminibanner.recordcount></cfif><cfset subsli=subsli+1>
				</cfloop>
			}
			<cfif itr lt minibanner.recordcount>,</cfif><cfset itr=itr+1>
		</cfloop>
		]		
	</cfsavecontent>
 <cffile action="write" file="#application.webrootpath#data\MiniBannerContent.js" charset="utf-8" output="#minibannercontent#">
Done
</cfoutput>