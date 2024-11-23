import StudentDashboardAllCourses from "./StudentDashboardAllCourses";
import {useState} from "react";

export default function HandleEnrollment(
    {courses, isEnrolled} : {
        courses: any,
        isEnrolled: (course: any) => boolean
    }
) {
    console.log("came into the tsx file")
    const [step, setStep] = useState(0);

    switch (step) {
        case 0:
            console.log("displaying All Enrollments");
            return (
                <StudentDashboardAllCourses courses={courses} isEnrolled={isEnrolled}/>
            )
        case 1:
            console.log("step 1")
            setStep(0)
            break;
    }
}