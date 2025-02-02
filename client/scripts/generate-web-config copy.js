const fs = require('fs');
const path = require('path');

const webConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<!--
  For more information on how to configure your ASP.NET application, please visit
  http://go.microsoft.com/fwlink/?LinkId=301880
  -->
<configuration>
  <configSections>
    <!-- For more information on Entity Framework configuration, visit http://go.microsoft.com/fwlink/?LinkID=237468 -->
    <section name="entityFramework" type="System.Data.Entity.Internal.ConfigFile.EntityFrameworkSection, EntityFramework, Version=6.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" requirePermission="false" />
  </configSections>
  <connectionStrings>
    <add name="DefaultConnection" connectionString="Data Source=(LocalDb)\MSSQLLocalDB;AttachDbFilename=|DataDirectory|\aspnet-GenerationPool-20230809051919.mdf;Initial Catalog=aspnet-GenerationPool-20230809051919;Integrated Security=True" providerName="System.Data.SqlClient" />
  </connectionStrings>
  <appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="ClientValidationEnabled" value="true" />
    <add key="UnobtrusiveJavaScriptEnabled" value="true" />
    <add key="recaptcha:SiteKey" value="6Lc-zrIoAAAAAKPRJsaGs6iJPJ_I-Wu4VBon8XUZ" />
    <add key="recaptcha:SecretKey" value="6Lc-zrIoAAAAAHd3OU6LBzOLPscyBfFQc8b_9-_V" />
   
      <add key="ZeptoMailApiKey" value="PHtE6r0LQ+nj32En8BdTtqfrFcGlPIgrq7kyKFVE4dlBX/AAH01Rq9t6kTW3+BspBqZDEP7Nmo5otujP4OLXcWnoPTsYD2qyqK3sx/VYSPOZsbq6x00YuFkbdUzbUIDset9i1SbXvNnaNA==" />
  
    <!--<add key="hcaptcha:SiteKey" value="8dcf73ef-e643-4c71-b24b-d1f87c72de00" />
    <add key="hcaptcha:SecretKey" value="ES_beeafb33793846e3b597767be5b330f0" />-->
  </appSettings>
  <!--
    For a description of web.config changes see http://go.microsoft.com/fwlink/?LinkId=235367.

    The following attributes can be set on the <httpRuntime> tag.
      <system.Web>
        <httpRuntime targetFramework="4.6.1" />
      </system.Web>
  -->
  <system.web>
    <authentication mode="None" />
    <compilation debug="true" targetFramework="4.5.2" />
    <httpRuntime targetFramework="4.5.2" />
    <httpModules>
      <add name="ApplicationInsightsWebTracking" type="Microsoft.ApplicationInsights.Web.ApplicationInsightsHttpModule, Microsoft.AI.Web" />
    </httpModules>
  </system.web>
  <system.webServer>
    <modules>
      <remove name="FormsAuthentication" />
      <remove name="ApplicationInsightsWebTracking" />
      <add name="ApplicationInsightsWebTracking" type="Microsoft.ApplicationInsights.Web.ApplicationInsightsHttpModule, Microsoft.AI.Web" preCondition="managedHandler" />
    </modules>
    <validation validateIntegratedModeConfiguration="false" />
<rewrite>
  <rules>
    <rule name="React Routes" stopProcessing="true">
      <match url="^(.*)" />
      <conditions logicalGrouping="MatchAll">
                        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
                        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/api" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Authentication/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Account/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/AdminDashboard/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Reports/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Report/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Customer/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Retailers/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Retailers/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Master/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/User/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/Home/.*" negate="true" />
                        <add input="{REQUEST_URI}" pattern="^/News/.*" negate="true" />

                        <add input="{REQUEST_URI}" pattern="^/$" negate="true" />
      </conditions>
      <action type="Rewrite" url="/index.html" />
    </rule>
  </rules>
</rewrite>
        <defaultDocument>
            <files>
                <clear />
                <add value="index.html" />
                <add value="Default.htm" />
                <add value="Default.asp" />
                <add value="index.htm" />
                <add value="iisstart.htm" />
                <add value="default.aspx" />
            </files>
        </defaultDocument>
  </system.webServer>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin.Security" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin.Security.OAuth" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin.Security.Cookies" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Microsoft.Owin" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-3.0.1.0" newVersion="3.0.1.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="Newtonsoft.Json" culture="neutral" publicKeyToken="30ad4fe6b2a6aeed" />
        <bindingRedirect oldVersion="0.0.0.0-12.0.0.0" newVersion="12.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Optimization" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-1.1.0.0" newVersion="1.1.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="WebGrease" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-1.5.2.14234" newVersion="1.5.2.14234" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Helpers" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.WebPages" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0" />
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Mvc" publicKeyToken="31bf3856ad364e35" />
        <bindingRedirect oldVersion="0.0.0.0-5.2.7.0" newVersion="5.2.7.0" />
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
  <entityFramework>
    <defaultConnectionFactory type="System.Data.Entity.Infrastructure.SqlConnectionFactory, EntityFramework" />
    <providers>
      <provider invariantName="System.Data.SqlClient" type="System.Data.Entity.SqlServer.SqlProviderServices, EntityFramework.SqlServer" />
    </providers>
  </entityFramework>
</configuration>
`;

const outputPath = path.join(__dirname, '../build/web.config');

fs.writeFileSync(outputPath, webConfigContent, 'utf8');
console.log('web.config generated in build folder.');

