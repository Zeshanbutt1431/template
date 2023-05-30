<cfsetting requesttimeout="99999999999">
<cfoutput>
	<cfquery name="mainslider" datasource="#application.murads#">
		select * from tcontent where PARENTID ='9DCF44B8-ACC1-59F2-E0B6FFCB101FCB72' and type ='Folder'
	</cfquery>
	<cfsavecontent variable="slidercontent">
		export const sliders =[
		<cfset itr=1>	
		<cfloop query="mainslider">
			{
				<cfquery name="subslider" datasource="#application.murads#">
					select * from tcontent where PARENTID = '#mainslider.CONTENTID#' and ACTIVE =1
				</cfquery>
				<cfset subsli=1>
					"id":#itr#,
				<cfloop query="subslider">
						<cfif subsli eq 1>
							"img": #replacelist(subslider.BODY,'<p>,</p>',',')#,
						<cfelseif subsli eq 2>
							"Heading":"#replacelist(subslider.BODY,'<p>,</p>',',')#",
						<cfelseif subsli eq 3>
							"SubHeading":"#replacelist(subslider.BODY,'<p>,</p>',',')#",
						<cfelseif subsli eq 4>
							"ShopNow":"#replacelist(subslider.BODY,'<p>,</p>',',')#",
						</cfif>
					<cfif subsli lt subslider.recordcount></cfif><cfset subsli=subsli+1>
				</cfloop>
			}
			<cfif itr lt mainslider.recordcount>,</cfif><cfset itr=itr+1>
		</cfloop>
		]		
	</cfsavecontent>
 <cffile action="write" file="#application.webrootpath#data\SliderContent.js" charset="utf-8" output="#slidercontent#">
Done
</cfoutput>