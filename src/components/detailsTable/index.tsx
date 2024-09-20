"use client";
import { FC, useState } from "react";
import sassVariable from "@/styles/variables.module.scss";
import { Modal,Typography } from "@/shared/components";
import { DownloadIcon, EyeIcon } from "@/shared/icons";
import { DUMMY_TABLE_DATA, TABLE_HEADERS } from "@/shared/constants";

interface ITransactionData {
  transactionId: string;
  amount: string;
  date: string;
  status: string;
}

const DetailsTable: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionData, setTransactionData] = useState<ITransactionData>();

  // Function to open the modal
  const openModal = (data: ITransactionData) => {
    setTransactionData(data);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const MODAL_DATA = [
    { title: "Transaction ID", value: transactionData?.transactionId },
    { title: "Transfer to", value: "XYZ corporation" },
    { title: "Date", value: transactionData?.date },
    { title: "Amount", value: transactionData?.amount },
    { title: "Status", value: transactionData?.status },
    { title: "Action", value: "Action" },
    { title: "Comment", value: "Against invoice IN00021009" },
  ];

  const ModalContent = () => {
    return (
      <div className="modal-grid-container">
        {MODAL_DATA.map((item) => (
          <div className="modal-grid-item" key={item.title}>
            <Typography variant="h6" color={sassVariable.gray}>
              {item.title}
            </Typography>
            {item.title === "Action" ? (
              <DownloadIcon />
            ) : (
              <Typography
                variant="h6"
                color={sassVariable.secondaryTexts}
                fontWeight="400"
                style={
                  item.title == "Status"
                    ? item.value === "Approved"
                      ? { color: sassVariable.success }
                      : { color: sassVariable.error }
                    : {}
                }
              >
                {item.value}
              </Typography>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="details-table">
        <div className="table-header">
          {TABLE_HEADERS.map((header) => (
            <Typography key={header} variant="h6" color="#828282">
              {header}
            </Typography>
          ))}
        </div>
        <div className="table-body">
          {DUMMY_TABLE_DATA.map(({ transactionId, amount, date, status }) => (
            <div className="table-row" key={transactionId}>
              <Typography variant="h6" fontWeight="400">
                {transactionId}
              </Typography>
              <Typography variant="h6" fontWeight="400">
                {date}
              </Typography>
              <Typography variant="h6" fontWeight="400">
                {amount}
              </Typography>
              <Typography
                variant="h6"
                fontWeight="400"
                color={
                  status === "Approved"
                    ? sassVariable.success
                    : sassVariable.error
                }
              >
                {status}
              </Typography>
              <Typography
                variant="div"
                fontWeight="400"
                style={{ cursor: "pointer" }}
              >
                <span
                  onClick={() =>
                    openModal({ transactionId, amount, date, status })
                  }
                >
                  <EyeIcon />
                </span>
                <DownloadIcon />
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={<ModalContent />}
      />
    </>
  );
};

export default DetailsTable;
