import { toast } from "react-toastify";
import { i18n } from "../translate/i18n";
import { isString } from 'lodash';

const toastError = err => {
    const errorMsg = err.response?.data?.error;
    if (errorMsg) {
        if (i18n.exists(`backendErrors.${errorMsg}`)) {
            console.error(`Error: ${i18n.t(`backendErrors.${errorMsg}`)}`);
            // Optionally log the error to an external service here
            /*
            toast.error(i18n.t(`backendErrors.${errorMsg}`), {
                toastId: errorMsg,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            */
            return;
        } else {
            console.error(`Error: ${errorMsg}`);
            // Optionally log the error to an external service here
            /*
            toast.error(errorMsg, {
                toastId: errorMsg,
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            */
            return;
        }
    } if (isString(err)) {
        console.error(`Error: ${err}`);
        // Optionally log the error to an external service here
        /*
        toast.error(err);
        */
        return;
    } else {
        console.error("An error occurred!");
        // Optionally log the error to an external service here
        /*
        toast.error("An error occurred!");
        */
        return;
    }
};

export default toastError;
