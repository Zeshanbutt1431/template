<cfsetting requesttimeout="99999999999">
<cfoutput>
	<cfquery name="muracontentTitle" datasource="#application.murads#">
		select * from tcontent where PARENTID ='9D164731-F89D-A46C-78DE4EAB12BA8F70' and type ='Folder'
	</cfquery>
	<cfsavecontent variable="footercontent">
		export const footer =  	[
		<cfset itr=1>	
		<cfloop query="muracontentTitle">
			{
				"id":#itr#,
				"heading": "#muracontentTitle.TITLE#",
			
				<cfquery name="muracontent" datasource="#application.murads#">
					select * from tcontent where PARENTID = '#muracontentTitle.CONTENTID#' and ACTIVE =1
				</cfquery>
				menu:[
				<cfset ty=1>
				<cfloop query="muracontent">
					{
						"id":#ty#,
						"LINKTITLE": "#muracontent.TITLE#",
						"URL":"#replacelist(muracontent.BODY,'<p>,</p>',',')#",
					}
					<cfif ty lt muracontent.recordcount>,</cfif><cfset ty=ty+1>
					
				</cfloop>
				]				
			}
			<cfif itr lt muracontentTitle.recordcount>,</cfif><cfset itr=itr+1>
		</cfloop>
		]
		
	</cfsavecontent>
 <cffile action="write" file="#application.webrootpath#data\FooterContent.js" charset="utf-8" output="#footercontent#">
Done
</cfoutput>