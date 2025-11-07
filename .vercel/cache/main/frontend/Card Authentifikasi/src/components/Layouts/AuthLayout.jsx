const AuthLayout = (props) => {
  return (
    <div className="flex justify-center bg-orange-300 min-h-screen items-center">
      <div className="w-full max-w-xs bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-orange-500">Login</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputForm
            label="Email"
            type="email"
            placeholder="example@gmail.com"
            name="email"
          />

          <InputForm
            label="Password"
            type="password"
            placeholder="******"
            name="password"
          />

          <Button className="bg-orange-500 w-full">Login</Button>
        </form>
      </div>
    </div>
  );
};
