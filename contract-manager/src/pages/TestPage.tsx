import ToastNotification from "../components/ToastNotification";
import "./Home.css";

function TestPage() {
  return (
    <>
      <ToastNotification
        title={"Account creation procedure"}
        text={"Please contact the admin via email"}
      ></ToastNotification>
    </>
  );
}

export default TestPage;
