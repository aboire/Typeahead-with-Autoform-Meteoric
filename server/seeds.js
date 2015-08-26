Meteor.startup(function () {

    var job_titles = ["Application Developer", "Application Support Analyst", "Applications Engineer",
        "Applications Engineer", "Architect", "Associate Architect", "Associate Architect", "Associate Developer",
        "Chief Architect", "Chief Information Officer", "Chief Technology Officer",
        "Computer and Information Systems Manager", "Computer Systems Manager", "Customer Support Administrator",
        "Customer Support Specialist", "Data Center Support Specialist", "Data Modelers", "Data Quality Manager",
        "Database Administrator", "Database Administrators (DBA)", "Database Analysts", "Datawarehouse Architects",
        "Desktop Support Manager", "Desktop Support Specialist", "Developer", "Director of Engineering",
        "Director of Technology", "Engineering Manager", "Front End Developer", "Help Desk Specialist",
        "Help Desk Technician", "Information Technology Coordinator", "Information Technology Director",
        "Information Technology Manager", "IT Support Manager", "IT Support Specialist", "IT Systems Administrator",
        "Java Developer", "Junior Software Engineer", "Lead, QA Engineer", "Lead, Quality Assurance Engineer",
        "Management Information Systems Director", ".NET Developer", "Network Architect", "Network Engineer",
        "Network Systems Administrator", "Principal Engineer", "Programmer", "QA Engineer",
        "Quality Assurance Engineer", "Security Specialist", "Senior Applications Engineer",
        "Senior Database Administrator", "Senior Network Architect", "Senior Network Engineer",
        "Senior Network System Administrator", "Senior Programmer", "Senior Security Specialist",
        "Senior Software Engineer", "Senior Support Specialist", "Senior System Administrator",
        "Senior System Analyst", "Senior System Architect", "Senior System Designer", "Senior Systems Analyst",
        "Senior Systems Software Engineer", "Senior Web Administrator", "Senior Web Developer", "Software Engineer",
        "Software Quality Assurance Analyst", "Sr. Engineering Manager", "Sr. QA Engineer",
        "Sr. Quality Assurance Engineer", "Support Specialist", "System Architect", "Systems Administrator",
        "Systems Analyst", "Systems Designer", "Systems Software Engineer", "Technical Specialist",
        "Technical Support Engineer", "Technical Support Specialist", "Vice President, Engineering",
        "Web Administrator", "Web Developer", "Webmaster"];

    if(JobTitleName.find().count() === 0){
        for(var i=0; i<job_titles.length; i++){
            JobTitleName.insert({name : job_titles[i]});
        }
    }

});
