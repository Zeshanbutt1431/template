<cfsetting requesttimeout="99999999999">
<cfoutput>
	<cfquery name="getdept" dbtype="query">
		select * from application.taxonomy where typ='EMPTY'
	</cfquery>
	<cfsavecontent variable="taxonomycontent">
		export const navItems =  	[
		<cfset itr=1>
		<!-------- GET DEPARTMENT --------->
		<cfloop query="getdept">
			<cfset tempweburl=replace(getdept.web_url,'/products/','','ALL')>
			<cfset tempweburl=replace(tempweburl,'/custom/','','ALL')>
			{
				"id":#itr#,
				"DEPT": "#dept#",
				"DEPTURL":"#tempweburl#",
			<!-------- GET TYPES --------->
				<cfquery name="gettype" dbtype="query">
					select * from application.taxonomy where dept='#getdept.dept#'
				</cfquery>
				Type:[
				<cfset ty=1>
				<cfloop query="gettype">
					<cfset tempweburltype=replace(gettype.web_url,'/products/','','ALL')>
					<cfset tempweburltype=replace(tempweburltype,'/custom/','','ALL')>
					{
						"id":#ty#,
						"TYPE": "#typ#",
						"TYPURL":"#tempweburltype#",
					<!-------- GET SUB TYPES --------->
					<cfquery name="getsubtype" dbtype="query">
						select * from application.taxonomy where dept='#getdept.dept#' and typ='#gettype.typ#' and subtyp_1 <>'EMPTY'
					</cfquery>
					<cfif getsubtype.recordCount gt 0>
					SubType:[
					<cfset sty=1>
					<cfloop query="getsubtype">
						
						<cfset tempweburlsubtype=replace(getsubtype.web_url,'/products/','','ALL')>
						<cfset tempweburlsubtype=replace(tempweburlsubtype,'/custom/','','ALL')>
						{
							"id":#sty#,
							"SUBTYPE": "#subtyp_1#",
							"TYPURL":"#tempweburlsubtype#",		
						}
						<cfif sty lt getsubtype.recordcount>,</cfif><cfset sty=sty+1>
					
					</cfloop>
					]
				</cfif>
						
					}
					<cfif ty lt gettype.recordcount>,</cfif><cfset ty=ty+1>
					
				</cfloop>
				]
				
			}
			<cfif itr lt getdept.recordcount>,</cfif><cfset itr=itr+1>
		</cfloop>
		]
		
	</cfsavecontent>
 <cffile action="write" file="#application.webrootpath#data\taxonomycontent.js" charset="utf-8" output="#taxonomycontent#">
Done
</cfoutput>