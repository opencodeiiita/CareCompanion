import React, { useState } from "react";
import { FaUserMd, FaUserCheck } from "react-icons/fa"; // React icons for step 3 options
import "../style/BookNow.css"; // Import the external CSS file

const BookNow = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bookingType: "",
    expertiseArea: "",
    appointmentType: "",
  });

  // Handle next and back navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Handle data change
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Calculate progress percentage
  const progressPercentage = (step / 3) * 100;

  return (
    <div className="container mt-5">
      {/* Display Selected Options */}
      <div className="selected-options mb-4">
        <small>
          {formData.bookingType && `Booking Type: ${formData.bookingType} > `}
          {formData.expertiseArea &&
            `Expertise Area: ${formData.expertiseArea} > `}
          {formData.appointmentType &&
            `Appointment Type: ${formData.appointmentType}`}
        </small>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="progress" style={{ height: "10px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: "#B92C55",
            }}
            aria-valuenow={progressPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <span className={`text-${step >= 1 ? "primary" : "muted"}`}>
            Step 1
          </span>
          <span className={`text-${step >= 2 ? "primary" : "muted"}`}>
            Step 2
          </span>
          <span className={`text-${step >= 3 ? "primary" : "muted"}`}>
            Step 3
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card shadow-sm">
        <div className="card-body">
          {step === 1 && (
            <div>
              <h4 className="mb-4">
                What type of booking are you looking for?
              </h4>
              <div className="list-group">
                {["Book consultation", "Get tested", "Get treated"].map(
                  (type) => (
                    <div className="box">
                      <button
                        key={type}
                        className={`list-group-item list-group-item-action ${
                          formData.bookingType === type ? "selected-field" : ""
                        }`}
                        onClick={() => handleChange("bookingType", type)}
                      >
                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <h5 className="mb-1">{type}</h5>
                            <p className="mb-1 text-muted">
                              {type === "Book consultation" &&
                                "Schedule a meeting with our experts for advice."}
                              {type === "Get tested" &&
                                "Schedule a test for diagnosis."}
                              {type === "Get treated" &&
                                "Book an appointment for medical treatment."}
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  )
                )}
              </div>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary" disabled>
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={nextStep}
                  disabled={!formData.bookingType}
                >
                  Proceed
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h4 className="mb-4">Which Area of Expertise Do You Need?</h4>
              <div className="list-group">
                {["Gynaecology", "Dermatology", "Endocrinology"].map((area) => (
                  <div className="box">
                    <button
                      key={area}
                      className={`list-group-item list-group-item-action ${
                        formData.expertiseArea === area ? "selected-field" : ""
                      }`}
                      onClick={() => handleChange("expertiseArea", area)}
                    >
                      <div>
                        <h5 className="mb-1">{area}</h5>
                        <p className="mb-1 text-muted">
                          {area === "Gynaecology" &&
                            "Get help for period-related problems, hormonal imbalance, etc."}
                          {area === "Dermatology" &&
                            "Treat acne, pigmentation, and hair loss."}
                          {area === "Endocrinology" &&
                            "Manage insulin resistance and hormones."}
                        </p>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary" onClick={prevStep}>
                  Back
                </button>
                <button
                  className="btn btn-primary"
                  onClick={nextStep}
                  disabled={!formData.expertiseArea}
                >
                  Proceed
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h4 className="mb-4">
                What Kind of Appointment Are You Interested In?
              </h4>
              <div className="row">
                {[
                  {
                    type: "Choose Expert",
                    description: "Let me choose my expert",
                    icon: <FaUserMd />,
                  },
                  {
                    type: "Assign me an expert",
                    description: "Assign an expert by latest available slots",
                    icon: <FaUserCheck />,
                  },
                ].map(({ type, description, icon }) => (
                  <div key={type} className="col-md-6 mb-3">
                    <div className="box">
                      <button
                        className={`list-group-item list-group-item-action ${
                          formData.appointmentType === type
                            ? "selected-field"
                            : ""
                        }`}
                        onClick={() => handleChange("appointmentType", type)}
                      >
                        <div className="d-flex align-items-center">
                          <div className="icon-container me-3">{icon}</div>
                          <div>
                            <h5 className="mb-1">{type}</h5>
                            <p className="mb-1 text-muted">{description}</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-secondary" onClick={prevStep}>
                  Back
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => alert(JSON.stringify(formData, null, 2))}
                  disabled={!formData.appointmentType}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookNow;
