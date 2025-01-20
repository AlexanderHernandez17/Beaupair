"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface Payment {
  title: string;
  amount: string;
}

interface PaymentPlan {
  name: string;
  total: string;
  payments: Payment[];
}

interface PaymentPlansProps {
  plans: PaymentPlan[];
}

const PaymentPlans: React.FC<PaymentPlansProps> = ({ plans }) => {
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0); // Índice del plan seleccionado

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Botones de selección de plan */}
      <div className="flex justify-center gap-4 mb-6">
        {plans.map((plan, index) => (
          <button
            key={plan.name}
            onClick={() => setSelectedPlanIndex(index)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedPlanIndex === index
                ? "bg-pink-400 text-white shadow-md"
                : "bg-pink-200 text-gray-700"
            }`}
          >
            {plan.name}
          </button>
        ))}
      </div>

      {/* Información del plan seleccionado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-6 rounded-lg shadow-lg border-2 border-pink-500 bg-white"
      >
        <h2 className="text-xl font-semibold text-pink-400 mb-4">
          Plan {plans[selectedPlanIndex].name}: {plans[selectedPlanIndex].total}
        </h2>
        <ul className="space-y-4">
          {plans[selectedPlanIndex].payments.map((payment, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-lg font-medium"
            >
              <span>{payment.title}</span>
              <span className="text-pink-600">{payment.amount}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default PaymentPlans;
