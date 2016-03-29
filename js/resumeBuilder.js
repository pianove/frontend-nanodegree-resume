/*==========Model ===============*/
var bio = {
    "name" : "Eniko Pianovszky",
    "role" : "web developer",
    "contacts" : {
        "mobile" : "+33 640 31 03 17 97",
        "email" : "eniko.pianovszky@gmail.com",
        "github" : "pianove",
        "twitter" : "N/A",
        "location" : "Roanne, France"
    },
    
    "biopic" : "images/eniko.jpg",
    "welcomeMessage" : "Hello, Thank You for reading my bio.",
    "skills" : ["Creative", "Teaching", "Multi-lingual","Volunteering", "Mother of three"],

  /*==========Octopus ===============*/
    "display" : function () {
        var formattedName =
        HTMLheaderName.replace("%data%", bio.name);

        var formattedRole =
        HTMLheaderRole.replace("%data%", bio.role);

        var formattedPic =
        HTMLbioPic.replace("%data%", bio.biopic);

        var formattedMobile =
        HTMLmobile.replace("%data%", bio.contacts.mobile);

        var formattedEmail =
        HTMLemail.replace("%data%", bio.contacts.email);

        var formattedGithub =
        HTMLgithub.replace("%data%", bio.contacts.github);

        var formattedTwitter =
        HTMLtwitter.replace("%data%", bio.contacts.twitter);

        var formattedLocation =
        HTMLlocation.replace("%data%", bio.contacts.location);

        var formattedWelcomeMsg =
        HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        
        $("#header").prepend(printButton);
        $("#header").prepend(internationalizeButton);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#header").append(formattedPic);
        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedTwitter);
        $("#topContacts").append(formattedLocation);
        
        $('#footerContacts').append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedTwitter);
        $("#footerContacts").append(formattedLocation);
    
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length > 0)
        {
            $("#header").append(HTMLskillsStart);
            for (skill in bio.skills) 
            {
                var formattedSkill =
                HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "Sun Yoga Tbilisi",
            "title" : "Certified Yoga Teacher",
            "location": "Tbilisi, Georgia",
            "dates": "2012-2014",
            "description": "ajdlajkdl aljdal dajlja ljllajdhfioeohgnvbhinkc jeuoeijfo;a;ffheh"
        },
        {
            "employer": "Armenian Branch of SADE",
            "title" : "Project Manager",
            "location": "Yerevan, Armenia",
            "dates": "2009-2011",
            "description": "djoj niihdwi djfwowej fkhfiwhfow jfoisja;hf fhhohindn a "
        },
        {
            "employer": "Accenture Hungary",
            "title" : "Consultant",
            "location": "Budapest, Hungary",
            "dates": "1997-2008",
            "description": "djojdodaju ojedfwoj askfoaknfaenfao kafowfjaqojfqo sfasshfos khfia kaf kabfksn ikabfla "
        }
    ],

    "display" : function () 
    {
        for (job in work.jobs)
        {
        
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer =
                HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle =
                HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle =
                formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);  

            var formattedLocation = 
                HTMLworkLocation.replace("%data%", work.jobs[job].location);

            $(".work-entry:last").append(formattedLocation); 

            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

            $(".work-entry:last").append(formattedWorkDates);

            var formattedWorkDescr = HTMLworkDescription.replace("%data%", work.jobs[job].description);

            $(".work-entry:last").append(formattedWorkDescr);
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "saa",
            "dates": "2012-2014",
            "description": "jk;;;;k;k; ksdbxodjcfl jlakfhka ccnkjhfck  ahljq;d khrqke; ",
            "images" : ""
        },
        {
            "title": "asdjaldj",
            "dates": "2012-2014",
            "description": "jk;;;;k;k; ksdbxodjcfl jlakfhka ccnkjhfck  ahljq;d khrqke; ",
            "images" : ""
            
        }
    ],

    "display" : function () 
        {
            for (project in projects.projects) 
            {
        
                $("#projects").append(HTMLprojectStart);

                var formattedTitle  = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

                $(".project-entry:last").append(formattedTitle);

                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);

                $(".project-entry:last").append(formattedProjectDates);

                var formattedProjectDescr = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

                $(".project-entry:last").append(formattedProjectDescr);

                if (projects.projects[project].images.length > 0)
                {
                    for (image in projects.projects[project].images) 
                    {
                        var formattedProjectPic = HTMLprojectImage.replace("%data%", projects.projects[project].images);
                        $(".project-entry:last").append(formattedProjectPic)
                    }
                }
            }
        }
};

var education = {
    "schools": [
        {
            "name": "Universite de Picardie",
            "location": "Budapest, Hungary",
            "degree": "BA",
            "majors": "Economics and Business Administration",
            "dates": "1992-1996",
            "url": "xxx"
        }
    ],
    
    "onlineCourses": [
        {
            "title": "Front End Web Developer",
            "school": "Udacity",
            "date": "2015",
            "url": "http://www.udacity.com/course/udxxx"
        }
    ],

    "display" : function() 
        {
            for (school in education.schools) 
              {
                
                $("#education").append(HTMLschoolStart);
        
                var formattedSchool = 
                    HTMLschoolName.replace("%data%", education.schools[school].name);
                var formattedDegree = 
                    HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                var formattedSchoolDegree = formattedSchool + formattedDegree;
        
                $(".education-entry:last").append(formattedSchoolDegree);  
        
                var formattedLocation = 
                    HTMLschoolLocation.replace("%data%", education.schools[school].location);
        
                $(".education-entry:last").append(formattedLocation); 
                
                var formattedDates = 
                    HTMLschoolDates.replace("%data%", education.schools[school].dates);

                $(".education-entry:last").append(formattedDates);

                var formattedMajors = 
                    HTMLschoolMajor.replace("%data%", education.schools[school].majors);

                $(".education-entry:last").append(formattedMajors)
              }
            for (course in education.onlineCourses) 
              {
                $(".education-entry:last").append(HTMLonlineClasses);
                
                var formattedTitle = 
                    HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);

                var formattedSchool = 
                    HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                
                var formattedTitleSchool = formattedTitle + formattedSchool;
                
                $(".education-entry:last").append(formattedTitleSchool);
                
                var formattedDates = 
                    HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
                
                $(".education-entry:last").append(formattedDates);
                
                var formattedUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url)
                
                $(".education-entry:last").append(formattedUrl)
            }
        }
}

bio.display();
work.display();
$(".work-entry:last").append(HTMLgoToTop);
projects.display();
$(".project-entry:last").append(HTMLgoToTop);
education.display();
$(".education-entry:last").append(HTMLgoToTop);

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

function locationizer(work_obj) {
    var locationArray = [];
    
    for (job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
    
    return locationArray;
}
//console.log(locationizer(work));
//
function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.trim().split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0, 1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

function inName(name) {
    if (name === undefined) {
          name = bio.name;
    } 
    return nameChanger(name);
}
//
////console.log(inName("seb hug"));
//

$('title').text(bio.name);
//to see a map
$("#mapDiv").append(googleMap);