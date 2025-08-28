import Link from "next/link";

const VerifyPage = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <p>Please check your email to verify to <Link href="/auth/signin" className="font-bold text-blue-600">Login</Link></p>
        </div>
      </div>
    );
  };
  
  export default VerifyPage;