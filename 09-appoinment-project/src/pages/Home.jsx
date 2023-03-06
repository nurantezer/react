import { useState } from "react"
import { appointmentData, doctorData } from "../helper/data"
import Doctors from "../components/Doctors"
import AppointmentList from "../components/AppointmentList"

const Home = () => {
    const [doctors, setDoctors] = useState(doctorData)
    const [appointments, setAppointments] = useState(appointmentData)
  return (
      <main className="text-center mt-2">
          <h1 className="display-5 text-danger">CLARUS HOSPİTRAL</h1>
          <Doctors
              doctors={doctors}
              appointments={appointments}
              setAppointments={setAppointments}
          />
          <AppointmentList
              appointments={appointments}
              setAppointments={setAppointments}
          />
          
    </main>
  )
}

export default Home