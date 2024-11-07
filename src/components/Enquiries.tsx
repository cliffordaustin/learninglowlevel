import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";

function Enquiries({
  children,
}: {
  children: (onOpen: () => void) => React.ReactNode;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [equiryType, setEquiryType] = React.useState("");

  return (
    <>
      {children(onOpen)}

      <Modal
        isOpen={isOpen}
        placement="bottom"
        radius="none"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="font-bold text-xl">
                Make an enquiry
              </ModalHeader>
              <ModalBody>
                <RadioGroup
                  label="Select a method of enquiry"
                  orientation="vertical"
                  value={equiryType}
                  onValueChange={setEquiryType}
                >
                  <Radio value="phone">Message me on whatsapp</Radio>
                  <Radio value="email">Send an email</Radio>
                </RadioGroup>
              </ModalBody>
              <ModalFooter>
                <Button
                  size="lg"
                  className={
                    "bg-[#8338ec] text-white px-6 " +
                    (equiryType === "" ? "opacity-50 cursor-not-allowed" : "")
                  }
                  color="primary"
                  radius="none"
                  disabled={equiryType === ""}
                  onClick={() => {
                    if (equiryType === "phone") {
                      window.open(
                        "https://api.whatsapp.com/send?phone=233555894688",
                        "_blank"
                      );
                    } else {
                      window.open(
                        "mailto:cliffordaustin670@gmail.com?subject=Sending an Enquiry",
                        "_blank"
                      );
                    }
                  }}
                >
                  Continue
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Enquiries;
