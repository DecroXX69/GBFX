const fs = require('fs');
const path = require('path');

const webConfigContent = `
<?xml version="1.0"?>
<configuration>
 <system.webServer>
 <rewrite>
 <rules>
 <rule name="React Routes" stopProcessing="true">
 <match url=".*" />
 <conditions logicalGrouping="MatchAll">
 <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
 <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
 <add input="{REQUEST_URI}" pattern="^/(api)" negate="true" />
 </conditions>
 <action type="Rewrite" url="/" />
 </rule>
 </rules>
 </rewrite>
 </system.webServer>
</configuration>
`;

const outputPath = path.join(__dirname, '../build/web.config');

fs.writeFileSync(outputPath, webConfigContent, 'utf8');
console.log('web.config generated in build folder.');

