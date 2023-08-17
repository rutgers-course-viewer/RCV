import db from './db';

// Define schema for CampusLocation
const campusLocationSchema = new db.Schema({
	code: String,
	description: String
});

// Define schema for School
const schoolSchema = new db.Schema({
	code: String,
	description: String
});

// Define schema for CreditsObject
const creditsObjectSchema = new db.Schema({
	code: String,
	description: String
});

// Define schema for CrossListedSection
const crossListedSectionSchema = new db.Schema({
	courseNumber: String,
	supplementCode: String,
	sectionNumber: String,
	offeringUnitCampus: String,
	primaryRegistrationIndex: String,
	offeringUnitCode: String,
	registrationIndex: String,
	subjectCode: String
});

// Define schema for Instructor
const instructorSchema = new db.Schema({
	name: String
});

// Define schema for Comment
const commentSchema = new db.Schema({
	code: String,
	description: String
});

// Define schema for CampusLocation in Section
const sectionCampusLocationSchema = new db.Schema({
	code: String,
	description: String
});

// Define schema for MeetingTime in Section
const meetingTimeSchema = new db.Schema({
	campusLocation: String,
	roomNumber: String,
	campusAbbrev: String,
	campusName: String,
	startTimeMilitary: String,
	buildingCode: String,
	meetingModeDesc: String,
	endTimeMilitary: String,
	meetingModeCode: String,
	baClassHours: String,
	pmCode: String,
	meetingDay: String,
	startTime: String,
	endTime: String
});

// Define schema for Section
const sectionSchema = new db.Schema({
	sectionEligibility: String,
	sessionDatePrintIndicator: String,
	examCode: String,
	specialPermissionAddCode: String,
	crossListedSections: [crossListedSectionSchema],
	sectionNotes: String,
	specialPermissionDropCode: String,
	instructors: [instructorSchema],
	number: String,
	majors: [db.Schema.Types.Mixed], // Array of any type
	openToText: String,
	openStatusText: String,
	sessionDates: String,
	specialPermissionDropCodeDescription: String,
	subtopic: String,
	openStatus: Boolean,
	comments: [commentSchema],
	instructorsText: String,
	minors: [db.Schema.Types.Mixed], // Array of any type
	examCodeText: String,
	campusCode: String,
	sectionCampusLocations: [sectionCampusLocationSchema],
	index: String,
	unitMajors: [db.Schema.Types.Mixed], // Array of any type
	printed: String,
	specialPermissionAddCodeDescription: String,
	commentsText: String,
	subtitle: String,
	crossListedSectionsText: String,
	sectionCourseType: String,
	meetingTimes: [meetingTimeSchema],
	legendKey: String,
	honorPrograms: [db.Schema.Types.Mixed] // Array of any type
});

// Define schema for CourseData
const courseSchema = new db.Schema({
	campusLocations: [campusLocationSchema],
	subject: String,
	openSections: Number,
	synopsisUrl: String,
	title: String,
	preReqNotes: String,
	courseString: String,
	school: schoolSchema,
	credits: Number,
	subjectDescription: String,
	coreCodes: [db.Schema.Types.Mixed], // Array of any type
	expandedTitle: String,
	mainCampus: String,
	subjectNotes: String,
	courseNumber: String,
	creditsObject: creditsObjectSchema,
	level: String,
	campusCode: String,
	subjectGroupNotes: String,
	offeringUnitCode: String,
	offeringUnitTitle: String,
	courseDescription: String,
	sections: [sectionSchema],
	supplementCode: String,
	unitNotes: String,
	courseNotes: String
});

courseSchema.index({ title: 1 }, { unique: true });

// Create and export CourseData model
export const courseModel = db.models.Course || db.model('Course', courseSchema);
