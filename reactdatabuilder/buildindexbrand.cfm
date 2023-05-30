<cfsetting requesttimeout="99999999999">
<cfoutput>
	<cfquery name="muraindexbrand" datasource="#application.murads#">		
		select * from tcontent where PARENTID = '1BCA9026-BB19-7A54-88C6146A8B2159B3' and ACTIVE =1
	</cfquery>
	<cfsavecontent variable="indexbrandcontent">
		export const indexbrands = [
		<cfset itr=1>	
		<cfloop query="muraindexbrand">
			{
				"id":#itr#,
				"img": #replacelist(muraindexbrand.BODY,'<p>,</p>',',')#,	
			}
			<cfif itr lt muraindexbrand.recordcount>,</cfif><cfset itr=itr+1>
		</cfloop>
		]		
	</cfsavecontent>
 <cffile action="write" file="#application.webrootpath#data\IndexBrandContent.js" charset="utf-8" output="#indexbrandcontent#">
Done
</cfoutput>