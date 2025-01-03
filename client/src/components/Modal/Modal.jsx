import React from "react";
import "./Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Modal({ setShowModal }) {
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };

  return (
    <div
      className="modal-overlay modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      onClick={handleOutsideClick}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Terms of Service and Privacy Policy</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body scrollable-body text-justify">
            <p className="date-updated">Last Updated: November 11, 2024</p>

            <div className="terms-of-service">
              <h6>Terms of Service</h6>
              <ol>
                <li>Acceptance of Terms</li>
                <p>
                  By accessing or using Block & Conquer ("the Service"), you
                  agree to comply with these Terms of Service and our Privacy
                  Policy. If you do not agree with any part of these terms, you
                  may not access the Service.
                </p>
                <li>Eligibility</li>
                <p>
                  To use Block & Conquer, you must be at least 13 years old.
                  Users under the age of 18 may require parental consent
                  depending on applicable laws.
                </p>
                <li>Account Responsibilities</li>
                <p>
                  You are responsible for maintaining the confidentiality of
                  your account information and for any activities that occur
                  under your account. Notify us immediately of any unauthorized
                  use of your account.
                </p>
                <li>User Content and Conduct</li>
                <p>
                  Block & Conquer allows users to create, share, and store
                  content, including flashcards, tasks, and collaborative
                  documents. You retain ownership of your content but grant us a
                  limited license to host and display it within the Service. You
                  agree not to use the Service for unlawful activities, spam,
                  abuse, or any activity that infringes on others’ rights or
                  disrupts the Service.
                </p>
                <li>Intellectual Property</li>
                <p>
                  All materials on Block & Conquer, including but not limited to
                  text, graphics, logos, and software, are owned by us or our
                  licensors. You may not use or reproduce any content from the
                  Service without permission, except as allowed by fair use.
                </p>
                <li>Gamification and Rewards</li>
                <p>
                  The Service provides a gamified experience, including points,
                  badges, and leaderboards. These features are for entertainment
                  and educational purposes only and do not hold monetary value.
                </p>
                <li>Limitations of Liability</li>
                <p>
                  Block & Conquer is provided on an "as-is" basis. We do not
                  guarantee that the Service will be error-free or
                  uninterrupted. We are not liable for any damages arising from
                  your use of the Service.
                </p>
                <li>Termination</li>
                <p>
                  We reserve the right to terminate or suspend access to the
                  Service at any time if we suspect violation of these Terms.
                </p>
                <li>Changes to Terms</li>
                <p>
                  We may update these Terms from time to time. Continued use of
                  the Service after any such changes will constitute acceptance
                  of the new Terms.
                </p>
              </ol>
            </div>

            <div className="privacy-policy mt-4">
              <h6>Privacy Policy</h6>
              <ol>
                <li>Introduction</li>
                <p>
                  Block & Conquer ("the Service") is committed to protecting
                  your privacy. This Privacy Policy explains what information we
                  collect, how we use it, and your rights regarding that
                  information.
                </p>
                <li>Information We Collect</li>
                <p>
                  We collect account information, usage data, and device
                  information. We also use cookies to enhance user experience
                  and track Service usage.
                </p>
                <li>How We Use Your Information</li>
                <p>
                  We use your data to provide, improve, and communicate with you
                  about the Service.
                </p>
                <li>Data Sharing and Disclosure</li>
                <p>
                  We may share your data with third-party providers to support
                  operations, such as hosting, analytics, and customer service.
                </p>
                <li>Data Retention</li>
                <p>
                  We retain your personal information as long as necessary to
                  fulfill the purposes outlined in this Policy, unless a longer
                  retention period is required by law.
                </p>
                <li>Your Rights</li>
                <p>
                  You have the right to access, correct, delete, or restrict the
                  processing of your personal data. To exercise these rights,
                  contact us at support@blockandconquer.com.
                </p>
                <li>Security</li>
                <p>
                  We take reasonable measures to protect your information from
                  unauthorized access or disclosure. However, no internet-based
                  service is completely secure.
                </p>
                <li>Changes to this Policy</li>
                <p>
                  We may update this Privacy Policy periodically. We encourage
                  you to review it regularly. Continued use of the Service after
                  any changes constitutes acceptance of the updated Policy.
                </p>
              </ol>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
