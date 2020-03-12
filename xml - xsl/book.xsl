<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" >
<xsl:template match=" /">
<html>
<head><title>Books</title>
</head>
<body>
<table width="100%" border="1">
  <THEAD>
           <TR>
                <TD width="35%"><B>title</B></TD>
                <TD width="15%"><B>author</B></TD>
                <TD width="10%"><B>pages</B></TD>
           
          </TR>
   </THEAD>
  <TBODY>
             <xsl:for-each select="books/book">
             <TR> 
                  <TD width="35%"><xsl:value-of select="title" /></TD>   
                  <TD width="15%"><xsl:value-of select="author" /></TD>
                  <TD width="10%"><xsl:value-of select="pages" /></TD>
            
            </TR>
            </xsl:for-each>
  </TBODY>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
