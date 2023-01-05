import axios from "axios";

const ApproveAppointment = (props) => {
  const onAccept = async () => {
    await axios
      .post("http://localhost:8080/api/doctor/accept-appointment", {
        id: props.id,
        approval: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={onAccept}>Accept</button>
    </div>
  );
};

export default ApproveAppointment;
