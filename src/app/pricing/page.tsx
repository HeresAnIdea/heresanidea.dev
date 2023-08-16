const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Pricing</h1>
      <div className="border p-4 rounded">
        <h2 className="text-lg font-semibold">Standard Plan</h2>
        <p>Free</p>
        <ul className="list-disc pl-5">
          <li>Access to public ideas</li>
          <li>Limited collaboration features</li>
        </ul>
      </div>
      <div className="border p-4 rounded">
        <h2 className="text-lg font-semibold">Premium Plan</h2>
        <p>$10/month</p>
        <ul className="list-disc pl-5">
          <li>Access to exclusive ideas</li>
          <li>Full collaboration features</li>
          <li>Priority support</li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
