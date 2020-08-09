import { Injectable } from '@angular/core';

@Injectable()
export class Stubs {
    version: string = '1.0.1';
    roles: object = [{"roles":[{"roleid":"481187","roledescription":"Group Scout Leader"},{"roleid":"1180888","roledescription":"Assistant Section Leader - Scouts"},{"roleid":"2037313","roledescription":"District Training Adviser"}],"name":"00122875 Joe Blogs"}]
    allroles: object = [[{"role":"Group Scout Leader","class":"Commissioner","location":"Group X","start":"01 May 2001","end":"","status":"Full","options":"","active":true,"roleid":"481187"},{"role":"Assistant Section Leader - Scouts","class":"Leader","location":"2nd Scout Group","start":"01 June 1992","end":"01 October 2018","status":"Full","options":"","active":true,"roleid":"1180888"},{"role":"District Training Advisor","class":"Advisor","location":"District XX","start":"01 June 1992","end":"","status":"Full","options":"","active":true,"roleid":"2037313"},{"role":"Group Assistant Venture Scout Leader","class":"Leader","location":"Unknown Group","start":"01 June 1985","end":"11 June 1996","status":"Full","options":"","active":false,"roleid":"2037"}]]
    user: object = [{"name":"00122875 Joe Blogs","roles":[{"role":"Group Scout Leader","start":"15 May 2001","status":"Full (Review Due: 31 Mar 2021)","location":"2nd Scout Group","ta":"","completed":"Wood Badge : 29 September 2008","blank":"","roleid":"481187"},{"role":"Assistant Section Leader - Scouts","start":"01 January 2008","status":"Full","location":"2nd Scout Group","ta":"00115047 My TA","completed":"Wood Badge : 27 May 2016","blank":"","roleid":"1180888"},{"role":"District Training Adviser","start":"12 April 2016","status":"Full","location":"District X","ta":"","completed":"PLP : 15 May 2018","blank":"","roleid":"2037313"}],"training":{"481187":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"481187","courseid":"001","coursename":"Essential Information"},{"course":"002 - Personal Learning Plan","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"002","coursename":"Personal Learning Plan"},{"course":"004 - Tools for the Role (Managers and Supporters)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"004","coursename":"Tools for the Role (Managers and Supporters)"},{"course":"005 - The Fundamentals of Scouting","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"005","coursename":"The Fundamentals of Scouting"},{"course":"006 - Changes in Scouting","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"006","coursename":"Changes in Scouting"},{"course":"007 - Scouting For All","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"007","coursename":"Scouting For All"},{"course":"008 - Skills of Leadership","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"481187","courseid":"008","coursename":"Skills of Leadership"},{"course":"009 - Working with Adults","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 February 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"481187","courseid":"009","coursename":"Working with Adults"},{"course":"010 - First Aid","learning_req":"Yes","learning_method":"Course","completed":"18 October 2015","validated_by":"00950748 Adult Training","validated_on":"18 October 2015","blank":"","roleid":"481187","courseid":"010","coursename":"First Aid"},{"course":"011 - Administration","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"481187","courseid":"011","coursename":"Administration"},{"course":"020 - Administration (Managers) (Archived)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"020","coursename":"Administration (Managers) (Archived)"},{"course":"021 - Growing the Movement (ENDED: JUN 17)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"021","coursename":"Growing the Movement (ENDED: JUN 17)"},{"course":"022 - Section Support (ENDED: JAN 2015)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"022","coursename":"Section Support (ENDED: JAN 2015)"},{"course":"023 - Safety for Managers and Supporters (ENDED: JUN 17)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"023","coursename":"Safety for Managers and Supporters (ENDED: JUN 17)"},{"course":"024 - Managing Adults (ENDED: JUN 17)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"024","coursename":"Managing Adults (ENDED: JUN 17)"},{"course":"025M - Assessing Learning (Manager) (ENDED: JUN 17)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"481187","courseid":"025M","coursename":"Assessing Learning (Manager) (ENDED: JUN 17)"},{"course":"025T - Assessing Learning (Training Adviser)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"01 December 2008","blank":"","roleid":"481187","courseid":"025T","coursename":"Assessing Learning (Training Adviser)"},{"course":"GDPR - General Data Protection Regulations","learning_req":"Yes","learning_method":"E-Learning","completed":"","validated_by":"00115047 Penny Lympany","validated_on":"","blank":"","roleid":"481187","courseid":"GDPR","coursename":"General Data Protection Regulations"},{"course":"SAFE - Mandatory Safeguarding Training","learning_req":"Yes","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"21 January 2010","blank":"","roleid":"481187","courseid":"SAFE","coursename":"Mandatory Safeguarding Training"},{"course":"SFTY - Ongoing Safety Training","learning_req":"Yes","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"03 June 2013","blank":"","roleid":"481187","courseid":"SFTY","coursename":"Ongoing Safety Training"}],"481188":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"481188","courseid":"001","coursename":"Essential Information"},{"course":"008 - Skills of Leadership","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"481188","courseid":"008","coursename":"Skills of Leadership"},{"course":"009 - Working with Adults","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 February 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"481188","courseid":"009","coursename":"Working with Adults"},{"course":"010 - First Aid","learning_req":"Yes","learning_method":"Course","completed":"18 October 2015","validated_by":"00950748 Adult Training","validated_on":"18 October 2015","blank":"","roleid":"481188","courseid":"010","coursename":"First Aid"}],"481189":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"481189","courseid":"001","coursename":"Essential Information"},{"course":"002 - Personal Learning Plan","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"481189","courseid":"002","coursename":"Personal Learning Plan"},{"course":"003 - Tools for the Role (Section Leaders)","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"481189","courseid":"003","coursename":"Tools for the Role (Section Leaders)"},{"course":"010 - First Aid","learning_req":"Yes","learning_method":"Course","completed":"18 October 2015","validated_by":"00950748 Adult Training","validated_on":"18 October 2015","blank":"","roleid":"481189","courseid":"010","coursename":"First Aid"},{"course":"GDPR - General Data Protection Regulations","learning_req":"No","learning_method":"E-Learning","completed":"","validated_by":"00115047 Penny Lympany","validated_on":"","blank":"","roleid":"481189","courseid":"GDPR","coursename":"General Data Protection Regulations"}],"1180247":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"1180247","courseid":"001","coursename":"Essential Information"},{"course":"GDPR - General Data Protection Regulations","learning_req":"No","learning_method":"E-Learning","completed":" ","validated_by":"00115047 Penny Lympany","validated_on":"","blank":"","roleid":"1180247","courseid":"GDPR","coursename":"General Data Protection Regulations"}],"1180888":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"001","coursename":"Essential Information"},{"course":"002 - Personal Learning Plan","learning_req":"No","learning_method":"One to One","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"002","coursename":"Personal Learning Plan"},{"course":"003 - Tools for the Role (Section Leaders)","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"003","coursename":"Tools for the Role (Section Leaders)"},{"course":"005 - The Fundamentals of Scouting","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"005","coursename":"The Fundamentals of Scouting"},{"course":"006 - Changes in Scouting","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"006","coursename":"Changes in Scouting"},{"course":"007 - Scouting For All","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"007","coursename":"Scouting For All"},{"course":"008 - Skills of Leadership","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"008","coursename":"Skills of Leadership"},{"course":"009 - Working with Adults","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 February 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"009","coursename":"Working with Adults"},{"course":"010 - First Aid","learning_req":"Yes","learning_method":"Course","completed":"18 October 2015","validated_by":"00950748 Adult Training","validated_on":"18 October 2015","blank":"","roleid":"1180888","courseid":"010","coursename":"First Aid"},{"course":"011 - Administration","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"011","coursename":"Administration"},{"course":"012 - Providing a Balanced Programme (ENDED: JAN 2015)","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"012","coursename":"Providing a Balanced Programme (ENDED: JAN 2015)"},{"course":"012A - Delivering a Quality Programme ","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"012A","coursename":"Delivering a Quality Programme"},{"course":"  012B - Programme Planning ","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"012B","coursename":"Programme Planning"},{"course":"013 - Growing the Section","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"013","coursename":"Growing the Section"},{"course":"014 - Supporting Young People","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"014","coursename":"Supporting Young People"},{"course":"015 - Promoting Positive Behaviour","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"015","coursename":"Promoting Positive Behaviour"},{"course":"016 - Residential Experiences","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"016","coursename":"Residential Experiences"},{"course":"017 - Running Safe Activities","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"017","coursename":"Running Safe Activities"},{"course":"018 - Practical Skills","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"018","coursename":"Practical Skills"},{"course":"019 - International","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"1180888","courseid":"019","coursename":"International"},{"course":"GDPR - General Data Protection Regulations","learning_req":"No","learning_method":"E-Learning","completed":"","validated_by":"00115047 Penny Lympany","validated_on":" ","blank":"","roleid":"1180888","courseid":"GDPR","coursename":"General Data Protection Regulations"}],"2037313":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"2037313","courseid":"001","coursename":"Essential Information"},{"course":"025T - Assessing Learning (Training Adviser)","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"01 December 2008","blank":"","roleid":"2037313","courseid":"025T","coursename":"Assessing Learning (Training Adviser)"},{"course":"GDPR - General Data Protection Regulations","learning_req":"No","learning_method":"E-Learning","completed":" ","validated_by":"00115047 Penny Lympany","validated_on":"","blank":"","roleid":"2037313","courseid":"GDPR","coursename":"General Data Protection Regulations"}],"2172358":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"2172358","courseid":"001","coursename":"Essential Information"},{"course":"002 - Personal Learning Plan","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"002","coursename":"Personal Learning Plan"},{"course":"004 - Tools for the Role (Managers and Supporters)","learning_req":"No","learning_method":"","completed":"","validated_by":"00115047 Penny Lympany","validated_on":"03 August 2020","blank":"","roleid":"2172358","courseid":"004","coursename":"Tools for the Role (Managers and Supporters)"},{"course":"005 - The Fundamentals of Scouting","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"2172358","courseid":"005","coursename":"The Fundamentals of Scouting"},{"course":"006 - Changes in Scouting","learning_req":"No","learning_method":"","completed":"","validated_by":"00950748 Adult Training","validated_on":"29 September 2008","blank":"","roleid":"2172358","courseid":"006","coursename":"Changes in Scouting"},{"course":"007 - Scouting For All","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"04 August 2020","validated_by":"00115047 Penny Lympany","validated_on":"04 August 2020","blank":"","roleid":"2172358","courseid":"007","coursename":"Scouting For All"},{"course":"010 - First Aid","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"010","coursename":"First Aid"},{"course":"011 - Administration","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"2172358","courseid":"011","coursename":"Administration"},{"course":"012A - Delivering a Quality Programme ","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"012A","coursename":"Delivering a Quality Programme"},{"course":"017 - Running Safe Activities","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"017","coursename":"Running Safe Activities"},{"course":"019 - International","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"2172358","courseid":"019","coursename":"International"},{"course":"GDPR - General Data Protection Regulations","learning_req":"No","learning_method":"E-Learning","completed":"","validated_by":"00115047 Penny Lympany","validated_on":" ","blank":"","roleid":"2172358","courseid":"GDPR","coursename":"General Data Protection Regulations"},{"course":"LMA - Achieving Results","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"LMA","coursename":"Achieving Results"},{"course":"LME - Enabling Change","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"LME","coursename":"Enabling Change"},{"course":"LMM - Managing Time and Personal Skills","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"LMM","coursename":"Managing Time and Personal Skills"},{"course":"LMP - Providing Direction","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"LMP","coursename":"Providing Direction"},{"course":"LMS - Safety for Managers and Supporters","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"LMS","coursename":"Safety for Managers and Supporters"},{"course":"LMU - Using Resources","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"LMU","coursename":"Using Resources"},{"course":"LMW - Working with People","learning_req":"No","learning_method":"","completed":"","validated_by":"","validated_on":"","blank":"","roleid":"2172358","courseid":"LMW","coursename":"Working with People"}],"2395183":[{"course":"001 - Essential Information","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 March 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"2395183","courseid":"001","coursename":"Essential Information"},{"course":"009 - Working with Adults","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"25 February 2015","validated_by":"00950748 Adult Training","validated_on":"17 April 2016","blank":"","roleid":"2395183","courseid":"009","coursename":"Working with Adults"},{"course":"019 - International","learning_req":"No","learning_method":"Your prior learning/experience recognised","completed":"26 March 2015","validated_by":"00115047 Penny Lympany","validated_on":"17 April 2016","blank":"","roleid":"2395183","courseid":"019","coursename":"International"},{"course":"GDPR - General Data Protection Regulations","learning_req":"Yes","learning_method":"E-Learning","completed":" ","validated_by":"00115047 Penny Lympany","validated_on":"","blank":"","roleid":"2395183","courseid":"GDPR","coursename":"General Data Protection Regulations"}]},"mandatory":[{"blank":"•","description":"010 - First Aid","lastcompleted":"18 October 2015","expires":"18 October 2018","type":"FA","number":"010","name":"First Aid"},{"blank":"•","description":"010 - First Aid","lastcompleted":"18 October 2015","expires":"18 October 2018","type":"FA","number":"010","name":"First Aid"},{"blank":"•","description":"001 - Essential Information","lastcompleted":"17 April 2016","expires":"17 April 2021","type":"SA","number":"001","name":"Essential Information"},{"blank":"•","description":"017 - Running Safe Activities","lastcompleted":"17 April 2016","expires":"17 April 2021","type":"SA","number":"017","name":"Running Safe Activities"},{"blank":"•","description":"SFTY - Ongoing Safety Training","lastcompleted":"03 June 2013","expires":"03 June 2018","type":"SA","number":"SFTY","name":"Ongoing Safety Training"},{"blank":"•","description":"023 - Safety for Managers and Supporters (ENDED: JUN 17)","lastcompleted":"29 September 2008","expires":"29 September 2013","type":"SA","number":"023","name":"Safety for Managers and Supporters (ENDED: JUN 17)"},{"blank":"•","description":"001 - Essential Information","lastcompleted":"17 April 2016","expires":"17 September 2020","type":"SG","number":"001","name":"Essential Information"},{"blank":"•","description":"SAFE - Mandatory Safeguarding Training","lastcompleted":"21 January 2010","expires":"21 January 2015","type":"SG","number":"SAFE","name":"Mandatory Safeguarding Training"}],"permits":[{"blank":"","activity":"Hill Walking","category":"Terrain 1 Summer","type":"Supervisory","restrictions":"","expires":"23 August 2023","expired":false},{"blank":"","activity":"Nights Away","category":"Greenfield","type":"Supervisory","restrictions":" - No Restrictions - ","expires":"01 January 2017","expired":true},{"blank":"","activity":"Nights Away","category":"Greenfield","type":"Supervisory","restrictions":"none","expires":"05 January 2023","expired":false}],"droles":["481187","1180888","481189","2037313","1180247"],"contact":{"addressline1":"1 Ocean Drive","email1":"g@y.com","addressline2":"1, Ocean Drive","email2":"work.name@work.com","addressline3":"","email3":"other@gmail.com","town":"ANY TOWN","county":"Surrey","postcode":"KTXX XAB","tel1":"010000000","socmed1":"","tel2":"0700000000","socmed2":"","tel3":"0711111111","socmed3":"","type_contact_type1":"Home","type_contact_type2":"Work","type_contact_type3":"Unspecified","type_country":"United Kingdom","type_tel1":"Home","type_socmed1":"--- Select ---","type_tel2":"Daytime Mobile","type_socmed2":"--- Select ---","type_tel3":"Home Mobile","type_socmed3":"--- Select ---","default_tel":"tel1","default_mail":"email1"},"general":{"title":"Mr","forenames":"Joe Peter","surname":"BLogs","known_as":"Joseph","dob":"01 August 1907","gender":"Male","nationality":"","ethnicity":"","faith":"","honours":"","school":"","type_nationality":" British","type_ethnicity":" 1.English/Welsh/Scottish/Northern Irish/British","type_faith":" Christian (including all Christian denominations)","type_Honours1":"--- Select Honour ---","type_Honours2":"--- Select Honour ---","type_Honours3":"--- Select Honour ---","type_occupation":"    Employed"}}]
}