import { useEffect, useState } from "react";
import Input from "../Input/Input";
import "./style.scss";
import { IOrderItem } from "../../types/order";

interface IFormProps {
  setOrders: React.Dispatch<React.SetStateAction<IOrderItem[]>>;
}

const Form = ({ setOrders }: IFormProps) => {
  const initialFormData = {
    userId: "",
    productId: "",
    quantity: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [error, setError] = useState<string>("");

  const handleOnChangeInput = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const createorder = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.productId === "" ||
      formData.quantity === "" ||
      formData.userId === ""
    ) {
      setError("Fill all the fields!");
      return;
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/orders/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await response.json();

    if (json.error) {
      setError(json.error);
      return;
    }

    fetchOrders(formData.userId);
  };

  const fetchOrders = async (userId: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/orders/${userId}`
    );
    const json = await response.json();

    if (json.error) {
      setError(json.error);
      return;
    }

    setOrders(json.data);
    setFormData(initialFormData);
  };

  useEffect(() => {
    setError("");
  }, [formData]);

  return (
    <form onSubmit={createorder} className="form">
      <Input
        labelText={"User Id"}
        value={formData.userId}
        onChange={(e) => handleOnChangeInput("userId", e)}
      />
      <Input
        labelText={"Product Id"}
        value={formData.productId}
        onChange={(e) => handleOnChangeInput("productId", e)}
      />
      <Input
        labelText={"Quantity"}
        value={formData.quantity}
        onChange={(e) => handleOnChangeInput("quantity", e)}
      />
      <button type="submit">Submit Order</button>
      {error.length > 0 && <span className="error">{error}</span>}
    </form>
  );
};

export default Form;
