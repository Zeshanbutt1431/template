<cfsetting requesttimeout="99999999999">
<cfoutput>
	<cfquery name="muraindexservices" datasource="#application.murads#">		
		select * from tcontent where PARENTID = 'D3F2CF42-CAEF-012C-4DF294B64D3755E4' and ACTIVE =1 order by ORDERNO
	</cfquery>
	<cfsavecontent variable="indexservicescontent">
		export const services = [
			{
		<cfset itr=1>	
		<cfloop query="muraindexservices">			
				<cfif itr eq 1>
					"id":#itr#,
					"img": #replacelist(muraindexservices.BODY,'<p>,</p>',',')#,
				<cfelseif itr eq 2>
					"phone": "#replacelist(muraindexservices.BODY,'<p>,</p>',',')#",	
				<cfelseif itr eq 3>
					"Description1": "#replacelist(muraindexservices.BODY,'<p>,</p>',',')#",	
				<cfelseif itr eq 4>
					"Description2": "#replacelist(muraindexservices.BODY,'<p>,</p>',',')#",	
				</cfif>	
			<cfif itr lt muraindexservices.recordcount></cfif><cfset itr=itr+1>
		</cfloop>
	}
		]		
	</cfsavecontent>
 <cffile action="write" file="#application.webrootpath#data\IndexServicesContent.js" charset="utf-8" output="#indexservicescontent#">
Done
</cfoutput>