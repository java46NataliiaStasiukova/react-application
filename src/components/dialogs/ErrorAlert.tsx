import { Alert, AlertTitle, Dialog} from "@mui/material";
import React from "react";
type Props = { 
    open: boolean;
    content: string;
}

const ErrorAlert: React.FC<Props> = ({open, content}) => {
    return <Dialog
    fullScreen
    open={open}
  >
<Alert severity="error">
  <AlertTitle>Error! </AlertTitle>
  <strong>{content}</strong>
</Alert>
<div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</Dialog>
}
export default ErrorAlert;