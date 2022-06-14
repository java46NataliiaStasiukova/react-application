import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Course } from "../../models/Course";
import { StateType } from "../../redux/store";
import { DataGrid, GridColumns, GridRowParams, GridActionsCellItem } from '@mui/x-data-grid'
import { Box, List, ListItem, Modal, Paper, useMediaQuery } from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { removeCourse, updateCourse } from "../../redux/actions";
import CourseForm from "../forms/CourseForm";
import ActionConfirmation from "../dialogs/ActionConfirmation";
import ConfirmationData from "../../models/ConfirmationData";
import { ClientData } from "../../models/ClientData";

let md: boolean;
let lg: boolean;
function getActions(actionsFn: (params: GridRowParams)=>JSX.Element[]): GridColumns {
    const columns: GridColumns = [
    { field: "id", type: "string", headerName: "Id", align: "left", headerAlign: "center", flex: 0.4, hide: !lg},
    { field: "name", type: "string", headerName: "Course Name", align: "center", headerAlign: "center", flex:1},
    { field: "lecturer", type: "string", headerName: "Lecturer", align: "center", headerAlign: "center", flex: 0.7, hide: !md },
    { field: "hours", type: "number", headerName: "Hours", align: "left", headerAlign: "center", flex: 0.5, hide: !lg },
    { field: "cost", type: "number", headerName: "Cost", align: "left", headerAlign: "center", flex: 0.6, hide: !lg },
    { field: "openingDate", type: "date", headerName: "Date", align: "center", headerAlign: "center", flex: 0.7 },
    { field: "actions", type: "actions", flex: 0.7, getActions:actionsFn}
]
return columns
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Courses: React.FC = () => {
    const clientData: ClientData = useSelector<StateType, ClientData>(state=>state.clientData);
    let course: any = React.useRef<Course>();
    const dispatch = useDispatch<any>()
    const courses: Course[] = useSelector<StateType, Course[]>(state => state.courses);//////
    const [isEdit, setEdit] = React.useState(false);
    const [flagOpen, setFlagOpen] = React.useState<boolean>(false);
    const confirmationData = React.useRef<ConfirmationData>({title: '', content: '', confirmHandler: () => {}});
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const shownCourse = React.useRef<Course>();
        md = useMediaQuery('(min-width: 600px)')
        lg = useMediaQuery('(min-width: 900px)')
    function actionsFn(params: GridRowParams): JSX.Element[] {
        const actionElements: JSX.Element[] = [                     
            <GridActionsCellItem label="Remove" hidden={!clientData.isAdmin} onClick={() => showRemoveConfirmation(params.id as number)}
             icon={<Delete/>}/>,
             <GridActionsCellItem label="Edit" hidden={!clientData.isAdmin} onClick={() => editFn(params.id as number)} icon={<Edit/>} />,
             <GridActionsCellItem label="Details" icon={<Visibility/>} 
             onClick={showDetails.bind(undefined, params.id as number)}/>
        ]
        return actionElements;
    }
    function showDetails(id: number) {
        shownCourse.current = courses.find(c => c.id === id);
        setModalOpen(true)
    }
    function editFn(id: number) {
        course.current = courses.find(c => c.id === id);
        setEdit(true);
    }
    function showRemoveConfirmation(id: number){
        confirmationData.current.confirmHandler = removeAction.bind(undefined, id);
        confirmationData.current.title = 'Remove Course Confirmation'
        confirmationData.current.content = `you are going to remove course with id ${id}`
        setFlagOpen(true);
    }
    function showUpdateConfirmation(course: Course){
        confirmationData.current.confirmHandler = updateAction.bind(undefined, course);
        confirmationData.current.title = 'Update Course Confirmation'
        confirmationData.current.content = `You are going to save changes for course with id ${course.id}`
        setFlagOpen(true);
    }
    function removeAction(id: number, flConfirm: boolean): void{
        if(flConfirm) {
            dispatch(removeCourse(id))
        }
        setFlagOpen(false);
    }
    function updateAction(course: Course, flConfirm: boolean): void{
        if(flConfirm){
            dispatch(updateCourse(course));
            //dispatch(authAction(clientData as ClientData))
            //dispatch(setOperationCode(OperationCode.OK))
        }
        setFlagOpen(false);
    }
    const getActionsCallback = useCallback(getActions, [courses]);
    const columns = getActionsCallback(actionsFn);

    return <Box sx={{display: 'flex', justifyContent: 'center' }}><Paper sx={{height: {xs: '70vh', sm: '85vh', md: '80vh'}, width: {xs: '100%', md: '80%'}}}>
        {isEdit ? <CourseForm submitFn={(course: Course) => {setEdit(false); showUpdateConfirmation(course)}} 
        editingCourse={course.current} /> : <DataGrid rows={courses} columns={columns} />}
    </Paper>
    <ActionConfirmation open={flagOpen} title={confirmationData.current.title} 
    content={confirmationData.current.content} 
    confirmHandler={confirmationData.current?.confirmHandler}/>
    
    
    <Modal
  open={modalOpen}
  onClose={() => setModalOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <List>
        {shownCourse.current && Object.entries(shownCourse.current as any).map(e => <ListItem key={e[0]}>{`${e[0]}: ${e[1]}`}</ListItem>)}
    </List>
  </Box>
</Modal>
    </Box>
}
export default Courses;
