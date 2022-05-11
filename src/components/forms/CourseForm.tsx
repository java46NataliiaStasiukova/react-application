import React from "react";
import { Course, createCourse } from "../../models/Course";
import courseData from "../../config/courseData.json";
import { Grid, Select, TextField, FormControl, InputLabel, MenuItem, Button } from "@mui/material";

type Props = {
    submitFn: (course: Course) => void;
}
const initialCourse: Course = createCourse(0, "", "", 0, 0, new Date());
const CourseForm: React.FC<Props> = ({ submitFn }) => {
    const {courses, lectors, minHours, maxHours, minCost, maxCost} = courseData;
    const [course, setCourse] = React.useState(initialCourse);

function onSubmit(event: any) {
    event.preventDefault();
     submitFn(course);
}
function onReset(event: any){
    setCourse(initialCourse)
}
function handlerCourse(event: any) {
   const courseCopy = {...course};
   courseCopy.name = event.target.value;
   setCourse(courseCopy);
}
function handlerLecturer(event: any) {
    const courseCopy = {...course};
    courseCopy.lecturer = event.target.value;
    setCourse(courseCopy);
 }
function handlerHours(event: any) {
    const courseCopy = {...course};
    courseCopy.hours = +event.target.value;
    setCourse(courseCopy);
}
function handlerCost(event: any) {
    const courseCopy = {...course};
    courseCopy.cost = +event.target.value;
    setCourse(courseCopy);
}
function handlerDate(event: any) {
    const courseCopy = {...course};
    courseCopy.openingDate = event.target.value;
    setCourse(courseCopy);
}
    return <form onSubmit={onSubmit} onReset={onReset}>
        <Grid container style={{paddingLeft: "10vw", paddingRight: "10vw"}}>


            <Grid item xs={12} sm={6} style={{padding: "1vw"}}>
                <FormControl fullWidth required>
                    <InputLabel id="course-select-label">Course Name</InputLabel>
                    <Select
                        labelId="course-select-label"
                        id="demo-simple-select"
                        label="Course Name"
                        value={course.name}
                        onChange={handlerCourse}
                    >
                        <MenuItem value="">None</MenuItem>
                       {getCourseItems(courses)}
                    </Select>
                </FormControl>
            </Grid>


            <Grid item xs={12} sm={6} style={{padding: "1vw"}}>
                <FormControl fullWidth required>
                    <InputLabel id="lecturer-select-label">Lecturer Name</InputLabel>
                    <Select
                        labelId="lecturer-select-label"
                        id="demo-simple-select"
                        label="Course Name"
                        value={course.lecturer}
                        onChange={handlerLecturer}
                    >
                        <MenuItem value="">None</MenuItem>
                       {getCourseItems(lectors)}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} style={{padding: "1vw"}}>
                <TextField type="number" label="Hours" fullWidth required value={course.hours || ""} 
                onChange={handlerHours}
                inputProps={{
                    min: `${minHours}`,
                    max: `${maxHours}`
                  }}
                  helperText="enter number of hours in range[80-500]"/>
            </Grid>

            <Grid item xs={12} sm={6} style={{padding: "1vw"}}>
                <TextField type="number" label="Cost" fullWidth required value={course.cost || ""} 
                onChange={handlerCost}
                inputProps={{
                    min: `${minCost}`,
                    max: `${maxCost}`
                  }}
                  helperText="enter cost in range[5000-30000]"/>
            </Grid>

            <Grid item xs={12} sm={12} style={{paddingLeft: "15vw", paddingRight: "15vw", paddingTop: "2vh"}}>     
                <TextField id="date" label="Course Date" type="date" fullWidth required 
                onChange={handlerDate}
                InputLabelProps={{
                shrink: true,
                }}/>
            </Grid>


            <Grid item xs={6} sm={6} style={{paddingTop: "1vw"}}>
                <Button type="submit">Submit</Button>
            </Grid>
            <Grid item xs={6} sm={6} style={{paddingTop: "1vw"}}>
                <Button type="reset">Reset</Button>
            </Grid>

        </Grid>
    </form>
}
export default CourseForm;

function getCourseItems(courses: string[]): React.ReactNode {
    return courses.map(c => <MenuItem value={c} key={c}>{c}</MenuItem>)
}
