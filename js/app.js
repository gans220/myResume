(function(){
	
	var app = angular.module('resume',[]);
	
	app.controller('resumeController',function(){
		
		this.headerDetails = {
			name: "Ganesh Kumar Subramanian",
			location: "Lives in Hyderabad",
			education: "Mechatronics graduate passionate about HCI"	,
			testClass: "fa fa-briefcase"
		};
		
		this.experiences =[
			{
				icon: "fa fa-briefcase",
				iconColorClass: "greenBgIcon",
				period: "January 2014",
				institute:  "Wipro Technologies",
				position: "Project Engineer",
				desc1: "Trained in Unix Server Administration",
				desc2: "Was deployed in the Service Desk of a UK based construction company Carillion PLC"
				
			},
			{
				icon: "fa fa-briefcase",
				period: "June 2013 - December 2013",
				institute:  "BlackChalk India",
				position: "Android Developer",
				desc1: "Worked as the part of team that was developing an android application based on a school management web application called Prezons.",
				desc2: "Designed activity layouts and UI elements"
				
			},
			{
				icon: "fa fa-graduation-cap faa-tada",
				iconColorClass: "gradIconBg",
				period: "May 2013",
				institute:  "SRM University",
				position: "B Tech, Mechatronics",
				desc1: "Graduated with a Cumulative Grade Point Average of 7.98",
				desc2: "Campus placed in Wipro Technologies"
				
			},
			{
				icon: "fa fa-spin fa-gear",
				iconColorClass: "gradIconBg",
				period: "April 2013",
				institute:  "Final Year Thesis",
				position: "Kinect Controlled Robotic Arm",
				paragh: "Designed and built a robotic arm that could replicate the movement of the real arm, which is captured by using a stereographic camera present in Xbox Kinect",
				video: true,
				bigRow: "bigRow",
				bigContent: "bigContent"
			},
			{
				timken: true,
				iconColorClass: "timkenBgIcon",
				period: "December 2011",
				institute:  "Timken Company",
				position: "Intern",
				desc1: "Was deployed in the engine plant of the company, where we were allowed to observe the functioning of manufacturing line",
				desc2: "Obtained company data and used it to perform a capacity analysis and work-flow analysis"
				
			},
			{
				ford: true,
				iconColorClass: "fordBgIcon",
				period: "December 2010",
				institute:  "Ford Motor Company",
				position: "Intern",
				desc1: "Was deployed in the engine plant of the company, where we were allowed to observe the functioning of manufacturing line",
				desc2: "Obtained company data and used it to perform a capacity analysis and work-flow analysis"
				
			},
			{
				icon: "fa fa-university",
				iconColorClass: "schoolBgIcon",
				period: "May 2009",
				institute:  "Amrita Vidyalayam",
				position: "Highschool (9th to 12th)",
				desc1: "Completed 10th and 12th Board exams with a score of 73% and 79% respectively",
				desc2: "Elected as the School Pupil Leader during my 12th"
				
			},
			{
				icon: "fa fa-pencil-square-o",
				iconColorClass: "primaryBgIcon",
				period: "1997 to 2004",
				institute:  "Primary and Secondary Schooling",
				position: "Schools Attended: SEV, Madurai; CEOA, Madurai; International Indian School, Riyadh",
				desc1: "Did my primary schooling at my Hometown - Madurai",
				desc2: "Moved to Saudi Arabia during 1998 and did my secondary schooling there till 2004"
				
			},
			{
				icon: "fa fa-heart faa-pulse animated",
				iconColorClass: "heartBgIcon",
				period: "28 June 1991",
				institute:  "Born",
				position: "Madurai",
				paragh: "Born as the first kid of Subramanian and Valli"
				
			}
		
		];
		
		
		
	});	
	
})();