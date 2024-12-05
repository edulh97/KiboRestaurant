import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './GuestOrderForm.css';
import { useNavigate } from 'react-router-dom';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const GuestOrderForm: React.FC = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('vertical');
  const navigate = useNavigate();
  
  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };

  return (
    <div className="form-container">  {/* Contenedor que centra el formulario */}
      <Form
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: formLayout === 'inline' ? 'none' : 600 }}
      >
        <Form.Item className="form-item">
          <Input className="input-field" placeholder="Full Name" type='Name' />
        </Form.Item>
        <Form.Item className="form-item">
          <Input className="input-field" placeholder="Email" type='Address'/>
        </Form.Item>
        <Form.Item className="form-item" >
          <Input className="input-field" placeholder="Phone Number" type='Number' />
        </Form.Item>
        <Form.Item className="form-item">
          <Input className="input-field" placeholder="Shipping Address" type='Address'/>
        </Form.Item>
        <Form.Item className="form-item">
          <Input className="input-field" placeholder="Credit Card" type='Number' />
        </Form.Item>
        <Form.Item className="form-item">
          <Button className="button-guest" type="text" onClick={() => navigate("/Main-Menu")}>Continue</Button>
        </Form.Item>
        <h2>
            Already have an account? <span className="signin-link" onClick={() => navigate("/Login-Screen")}> &nbsp; Sign In</span>
        </h2>
      </Form>
    </div>
  );
};

export default GuestOrderForm;
