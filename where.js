myData = [
[39.472191,-0.378975, 'Office Hours - Valencia, Spain 29-Mar-2022','X-CqjEkrRc8'],
[34.9876552,135.7580242, 'Office Hours - Kyoto, Japan 14-Aug-2019','cl_-OhsbEEg'],
[43.4487038,-80.4874719, 'Office Hours - Kitchener, ON 14-Aug-2019','SWWDaOcgRlo'],
[51.5811556,4.8052428, 'Office Hours - Breda, NL 30-June-2019','4J2Yl1YOJfk'],
[51.99805,-0.742, 'Office Hours - Bletchley Park, UK 31-March-2019','07b8eWwjDWw'],
[19.1327278,72.9150673, 'Office Hours Mumbai, India 12-Dec-2018', 'GITuGFeG7J8'],
[12.9918752,77.5861043, 'Office Hours Bengaluru, India 10-Dec-2018', 'E8hiItlGnBU'],
[17.4732926,78.373110, 'Office Hours Hyderabad, India 05-Oct-2018', '4ba7vHT_muU'],
[42.406696,-86.139936, 'Office Hours Gingerman Raceway, South Haven, MI 14-Oct-2018', 'F5gm1ohu8FE'],
[42.47585, -83.24469, 'Office Hours Detroit 6-May-2018', 'oonbqMIhXms'],
[33.4145055,-111.9367579, 'Office Hours Phoenix 7-Mar-2018', 'HtSea5HfNnY'],
[35.6777775,139.7704905, 'Office Hours Tokyo 27-Feb-2018', 'CxAXTgKXEMw'],
[29.9534342,-90.0675991, 'Office Hours New Orleans, LA 31-Jan-2018','68IflJ1KYdU'],
[35.77862,-78.64039, 'Office Hours Raleigh, North Carolina 24-Oct-2017','CWGWn0vPTMQ'],
[37.79177,-122.40275, 'Office Hours San Francisco 19-Oct-2017','dQ1YZMU1DHg'],
[39.94849,-75.14372, 'Office Hours Philadelphia 07-June-2017','O5ESxp-IPEs'],
[49.28313,-123.11214, 'Office Hours Vancouver, BC Canada 25-May-2017','l3iDVYEJwyQ'],
[47.61524,-122.34112, 'Office Hours Seattle,WA 23-May-2017','7ScIlzEcKMg'],
[39.74793,-104.99774, 'Office Hours Denver, CO 18-May-2017','Lw_cQGrKzxo'],
[-33.95954,18.4704, 'Office Hours Capetown South Africa 11-May-2017','Znly_nfEXSM'],
[51.52654,-0.08019, 'Office Hours London Shoreditch 21-April-2017','kPXMZDPMpUs'],
[51.99705,-0.74, 'Class Reunion - Bletchley Park, UK 26-February-2017','06Joh-jiTEE'],
[28.55347,-81.36594, 'Office Hours Orlando Florida 21-January-2017','bJhblPvjzYg'],
[37.50981,127.0581, 'Office Hours Seoul Korea 22-September-2016','2f9YNAIpjjQ'],
[40.27352,-111.67855, 'Office Hours Orem, UT 18-August-2016','NjXw_sBnIGQ'],
[47.60813,-122.33986, 'Office Hours Seattle, WA 30-June-2016','7g8hMPcZNOY'],
[45.52594,-122.68555, 'Office Hours Portland, OR 29-June-2016','lqlbDxdZWZQ'],
[40.72862,-74.00475, 'Office Hours New York, NY 25-May-2016','1SQ4eAeVV4Y'],
[29.73472,-95.33156, 'Office Hours  Houston, Texas 23-Apr-2016','edU1-4MtEbg'],
[52.07609,4.30902, 'Office Hours The Hague, NL 20-Mar-2016','V0_IEvDvaYY'],
[28.45238,-81.47268, 'Office Hours Orlando Florida 26-Jan-2015','IDQHClsP2HA'],
[41.39624,2.16008, 'Office Hours Barcelona Spain 17-Dec-2015','kBeBQ3gAJ00'],
[51.99652,-0.74272, 'Office Hours / Class Reunion Bletchley Park - 31-Sept-2015','9O0NLuLbD9Q'],
[42.28061,-83.74068, 'Impromptu Office Hours, North Quad, Ann Arbor, MI USA','wXrDopq8pVw'],
[42.35086,-71.04298, 'Office Hours Boston, MA, USA','Bq0XOOYwUpU'],
[42.35031,-83.06018, 'Office Hours - Detroit, MI, USA','r6Wge5WQ0g4'],
[39.2873,-76.61099, 'Office Hours - Baltimore, MD, USA','wnrXUXey_oQ'],
[33.84716,-84.36796, 'Office Hours - Atlanta (Buckhead), GA USA','Vsf3YyB7Jnc'],
[45.50405,-73.56098, 'Meeting Allen B.Downey and Jeff Elkner','CyOnRyH5uxE'],
[42.28101,-83.74056, 'Office Hours - Ann Arbor, MI USA','qJHcFOIjGuI'],
[52.09293,4.28381, 'Office Hours - Den Haag, Netherlands','11jTwRfHMPI'],
[45.50674,-73.55985, 'Office Hours - Montreal Quebec','EyArXpJMtPA'],
[46.01605,9.25717, 'Office Hours Paris / Milan - Extended Edition','4hIwl_8hmq8'],
[45.69208,9.4145, 'Office Hours - Milan, Italy (Updated)','rc6QtMN6vbM'],
[48.85291,2.34238, 'Office Hours - Paris (Updated)','-qRY5sFvR0w'],
[41.49932,-81.69436, 'Office Hours - Cleveland, OH','FzjKicH7IhI'],
[45.49739,-73.62273, 'Office Hours - Montreal, Quebec','lx_jwYZrtMY'],
[28.477,-81.45793, 'Office Hours Orlando, FL','03UXDR8-tSk'],
[37.41574,-122.07763, 'Office Hours Mountain View CA','7UV9GWofRAk'],
[42.36593,-71.087, 'Office Hours - Boston, MA','kF4T1Fm71_E'],
[36.16994,-115.13983, 'Office Hours - Las Vegas, NV','pukbPvD4Uo4'],
[25.77701,-80.19059, 'Office Hours - Miami, FL','61brxtZGzqg'],
[40.75529,-73.99078, 'Office Hours - New York NY','T-T9RT0ardw'],
[38.89997,-77.02213, 'Office Hours - Washington, DC','02QDFT343xk'],
[40.76751,-111.89349, 'Internet History Technology, and Security Office Hours Salt Lake City, UT','6JveYlIj06g'],
[33.28053,-111.78868, 'Internet History Technology, and Security Office Hours Phoenix, AZ','_8-wTzMwlvY'],
[34.03275,-118.47536, 'Internet History Technology, and Security Office Hours Santa Monica, CA','3B9x83OZOYA'],
[45.81112,15.97319, 'Office Hours, Internet History, Technology, and Security in Zagreb, Croatia','dDHxUQzbVrE'],
[46.55465,15.64588, 'Office Hours, IHTS - Maribour, Slovenia','zrZM7Y3WtS8'],
[52.37262,4.90036, 'Amsterdam Office Hours for Internet History, Technology, and Security (IHTS) on Coursera','hHmVM3nn-ec'],
[51.4928,-0.22435, 'Office Hours in London - Internet History, Technology, and Security','J-vbiY5HAX4'],
[51.49218,-0.22465, 'IHTS Course - Dr Chuck in London - Out of Office Hours','BsSKYzVLO6w'],
[36.11617,-115.15491, 'Office Hours Las Vegas - Internet History, Technology, Security Coursera','U13_4Y2yJU4'],
[-31.95424,115.85305, 'Perth Office Hours - Internet History, Technology, and Security / Coursera','7Wz9MGDJH4s'],
[-37.82418,144.95191, 'Melbourne Australia - Internet History, Technology, and Security Office Hours','GD9RSoVDKkw'],
[32.716,-117.16894, 'Internet History San Diego Office Hours','rKI5zE0ZVu4'],
[39.87989,-86.27265, 'Internet History Office Hours - Indianapolis, Indiana','6MvtO3hkJ34'],
[19.34731,-99.18228, 'Internet History, Technology, and Security Office Hours Mexico City, Mexico','j7fhF-GQi1E'],
[19.04343,-98.19708, 'Internet History, Technology, and Security Office Hours Puebla Mexico','O7jookwwf20'],
[37.43374,-122.12901, 'Internet History, Technology and Security - Office Hours Palo Alto','HXw98e41I7I'],
[30.2651,-97.73849, 'Internet History, Technology and Security - Office Hours Austin, TX (6-Mar-2013)','nlaZK1FhxBA'],
[14.57493,120.98469, 'Internet History, Technology, and Security Office Hours - Manila, Philippines','R6zlQZcM72o'],
[52.36628,4.89626, 'IHTS Office Hours - Amsterdam (2012-11-12)','lWxUFvYmeq0'],
[41.38569,2.17149, 'Barcelona IHTS Office Hours (2012-10-27)','JzNHvmSv8TI'],
[37.51356,127.03479, 'IHTS Office Hours Gangam Style - Seoul, Korea, October 22, 2012','nHaPvqU4MrM'],
[38.91172,-77.02776, 'Office Hours in Washington DC - Internet History, Technology and Security','kinaN5n1tOw'],
[41.8806,-87.62743, 'Chicago Office Hours  - Internet History Technology, and Security','T6ZljoZOnwI'],
[42.27513,-83.73558, 'Ann Arbor Offices Hours  2012-08-08','I9rPidDyfVE'],
[34.18871,-118.64153, 'Internet History, Technology, and Security Office Hours - Los Angeles','v5rlMJHBC2k'],
[40.72959,-73.99624, 'Office Hours - New York City - July 26, 2012','ar1J5TL2OrU']
];
