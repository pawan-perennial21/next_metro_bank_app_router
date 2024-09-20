// "use client";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";
// import { PATH } from "../constants";

// const useHandleFetchError = () => {
//   const router = useRouter();

//   const handleFetchError = async (error: any) => {
//     if (error.response) {
//       const { message } = error.response?.data;

//       if (message === "jwt expired") {
//         toast.error("Session is expired. Redirecting to Login...");
        
//         // Use fetch to call the logout API
//         const response = await fetch("/api/users/logout", {
//           method: "GET",
//         });

//         if (response.ok) {
//           router.push(PATH.login);
//         } else {
//           toast.error("Logout failed. Please try again.");
//         }
//       } else {
//         toast.error("An unexpected error occurred");
//       }
//     }
//   };

//   return handleFetchError;
// };

// export default useHandleFetchError;
"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { PATH } from "../constants";

const useHandleAxiosError = () => {
  const router = useRouter();

  const handleAxiosError = async (error: any) => {
    if (error.response) {
      console.log({"=====>":error.response})
      const { message } = error.response?.data;

      if (message === "jwt expired") {
        toast.error("Session is expired. Redirect to Login...");
        await axios.get("/api/users/logout");
        router.push(PATH.login);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return handleAxiosError;
};

export default useHandleAxiosError;