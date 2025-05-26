// pages/PropertyValuation.tsx
import { Button } from "@/components/base";
import { Layout } from "@/layouts";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { ChangeEvent, useEffect, useState } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
  var google: any;
}

interface FormData {
  address: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  floors: string;
  amenities: string[];
  useCase: "buy" | "sell" | "rent";
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } },
};

const leftSectionVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
  },
};

const calculatorVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.5, ease: "easeOut" } },
};

const PropertyValuation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    address: "",
    propertyType: "",
    bedrooms: 1,
    bathrooms: 1,
    floors: "",
    amenities: [],
    useCase: "buy",
  });
  const [error, setError] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [processing, setProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);

  const [showFinalError, setShowFinalError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBwIVmKqz-J2di_INgmc8aMhddIaCUxBMQ&libraries=places";
      script.async = true;
      script.onload = () => {
        const input = document.querySelector(
          "#input-address"
        ) as HTMLInputElement;
        const autocomplete = new google.maps.places.Autocomplete(input, {
          fields: ["formatted_address", "geometry"],
        });
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          setFormData((prev) => ({
            ...prev,
            address: place.formatted_address || "",
          }));
        });
      };
      document.head.appendChild(script);
    };

    if (!window.google) {
      loadGoogleMapsScript();
    }
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "number" || name === "bedrooms" || name === "bathrooms"
          ? Number(value)
          : value,
    }));
    setError("");
  };

  const handleAmenitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(value)
        ? prev.amenities.filter((item) => item !== value)
        : [...prev.amenities, value],
    }));
    setError("");
  };

  const validateStep = (step: number): boolean => {
    if (step === 1 && !formData.address) {
      setError("Please enter a valid property address.");
      return false;
    }
    if (step === 2 && !formData.propertyType) {
      setError("Please select a property style.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      setError("");
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    setError("");
  };

  const handleSubmit = () => {
    if (!formData.address || !formData.propertyType) {
      setError("Please complete all required fields.");
      return;
    }
    const hasEnoughData =
      formData.address && formData.propertyType && formData.bedrooms >= 1;
    if (!hasEnoughData) {
      setError(
        "We need more details to provide an accurate valuation. Please ensure all required fields are filled."
      );
      return;
    }

    setProcessing(true);
    setShowFinalError(false);
    setError("");
    setProcessingStep(1);

    setTimeout(() => setProcessingStep(2), 800);
    setTimeout(() => setProcessingStep(3), 1600);
    setTimeout(() => {
      setProcessing(false);
      setShowFinalError(true);
      setProcessingStep(0);
    }, 2500);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
          >
            <div className="w-full flex flex-col gap-8">
              {error && (
                <motion.div variants={inputVariants}>
                  <p className="text-red-400 text-center text-sm font-medium">
                    {error}
                  </p>
                </motion.div>
              )}
              <motion.div variants={inputVariants}>
                <label
                  htmlFor="input-address"
                  className="text-white font-semibold text-base mb-2 block"
                >
                  Property Address
                </label>
                <p className="text-gray-300 text-sm mb-2">
                  Enter the full address of the property to get started.
                </p>
                <input
                  id="input-address"
                  name="address"
                  type="text"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="e.g., 123 Main St, City, Country"
                  className="w-full h-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary px-4 text-base"
                />
              </motion.div>
              <motion.div variants={buttonVariants}>
                <button
                  className="bg-primary text-white text-base font-semibold cursor-pointer w-full h-12 rounded-lg hover:bg-primary/80 transition-colors"
                  onClick={handleNext}
                >
                  Next
                </button>
              </motion.div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
          >
            <div className="w-full flex flex-col gap-8">
              {error && (
                <motion.div variants={inputVariants}>
                  <p className="text-red-400 text-center text-sm font-medium">
                    {error}
                  </p>
                </motion.div>
              )}
              <motion.div variants={inputVariants}>
                <label
                  htmlFor="propertyType"
                  className="text-white font-semibold text-base mb-2 block"
                >
                  Property Style
                </label>
                <p className="text-gray-300 text-sm mb-2">
                  Choose the style that best describes your property.
                </p>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary px-4 text-base"
                >
                  <option value="" disabled>
                    Select Property Style
                  </option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Duplex">Duplex</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </motion.div>
              <motion.div variants={inputVariants}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="bedrooms"
                      className="text-white font-semibold text-base mb-2 block"
                    >
                      Bedrooms
                    </label>
                    <p className="text-gray-300 text-sm mb-2">
                      Select the number of bedrooms.
                    </p>
                    <select
                      id="bedrooms"
                      name="bedrooms"
                      value={formData.bedrooms}
                      onChange={handleInputChange}
                      className="w-full h-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary px-4 text-base"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Bedroom{i + 1 > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="bathrooms"
                      className="text-white font-semibold text-base mb-2 block"
                    >
                      Bathrooms
                    </label>
                    <p className="text-gray-300 text-sm mb-2">
                      Select the number of bathrooms.
                    </p>
                    <select
                      id="bathrooms"
                      name="bathrooms"
                      value={formData.bathrooms}
                      onChange={handleInputChange}
                      className="w-full h-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary px-4 text-base"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} Bathroom{i + 1 > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={inputVariants}>
                <label
                  htmlFor="floors"
                  className="text-white font-semibold text-base mb-2 block"
                >
                  Number of Floors (Optional)
                </label>
                <p className="text-gray-300 text-sm mb-2">
                  Specify the number of floors, if applicable.
                </p>
                <select
                  id="floors"
                  name="floors"
                  value={formData.floors}
                  onChange={handleInputChange}
                  className="w-full h-12 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary px-4 text-base"
                >
                  <option value="">Select floors</option>
                  {[...Array(9)].map((_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                  <option value="8+">8+</option>
                </select>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <div className="flex gap-4">
                  <button
                    className="bg-gray-700 text-white text-base font-semibold w-1/2 h-12 cursor-pointer rounded-lg hover:bg-gray-600 transition-colors"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    className="bg-primary text-white text-base font-semibold cursor-pointer w-1/2 h-12 rounded-lg hover:bg-primary/80 transition-colors"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={stepVariants}
          >
            <div className="w-full flex flex-col gap-8">
              {error && (
                <motion.div variants={inputVariants}>
                  <p className="text-red-400 text-center text-sm font-medium">
                    {error}
                  </p>
                </motion.div>
              )}
              <motion.div variants={inputVariants}>
                <div className="flex flex-col gap-4">
                  <label className="text-white font-semibold text-base">
                    Property Features
                  </label>
                  <p className="text-gray-300 text-sm">
                    Select the features that apply to your property to enhance
                    the valuation.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Fully Furnished",
                      "24/7 Electricity",
                      "Gym",
                      "Swimming Pool",
                      "Gated Estate",
                      "Boys’ Quarters",
                    ].map((amenity) => (
                      <div key={amenity} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id={`amenity-${amenity}`}
                          name="amenities"
                          value={amenity}
                          checked={formData.amenities.includes(amenity)}
                          onChange={handleAmenitiesChange}
                          className="w-5 h-5 bg-gray-800 border-2 border-gray-600 rounded focus:ring-primary focus:ring-2 cursor-pointer"
                        />
                        <label
                          htmlFor={`amenity-${amenity}`}
                          className="text-white text-sm cursor-pointer"
                        >
                          {amenity}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={inputVariants}>
                <div className="flex flex-col gap-4">
                  <label className="text-white font-semibold text-base">
                    Property Goals
                  </label>
                  <p className="text-gray-300 text-sm">
                    Tell us your goal for this property to tailor the valuation.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {["buy", "sell", "rent"].map((goal) => (
                      <div key={goal} className="flex items-center gap-2">
                        <input
                          type="radio"
                          id={`goal-${goal}`}
                          name="useCase"
                          value={goal}
                          checked={formData.useCase === goal}
                          onChange={handleInputChange}
                          className="w-5 h-5 bg-gray-800 border-2 border-gray-600 rounded-full focus:ring-primary focus:ring-2 cursor-pointer"
                        />
                        <label
                          htmlFor={`goal-${goal}`}
                          className="text-white text-sm cursor-pointer"
                        >
                          To {goal.charAt(0).toUpperCase() + goal.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <div className="flex gap-4">
                  <button
                    className="bg-gray-700 text-white text-base font-semibold w-1/2 cursor-pointer h-12 rounded-lg hover:bg-gray-600 transition-colors"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    className="bg-primary text-white text-base font-semibold w-1/2 h-12 cursor-pointer rounded-lg hover:bg-primary/80 transition-colors"
                    onClick={handleSubmit}
                  >
                    Get Valuation
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const renderProcessing = () => (
    <motion.div
      key="processing"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={stepVariants}
    >
      <div className="w-full flex flex-col gap-8">
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-2 mb-2">
            {[1, 2, 3].map((step) => (
              <span
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  processingStep >= step ? "bg-green-400" : "bg-gray-700"
                }`}
              >
                <svg width="18" height="18" fill="none">
                  <path
                    d="M4 9.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            ))}
          </div>
          <p className="text-primary font-semibold text-center text-sm mb-2">
            98% valuation accuracy in the majority cases
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start mx-auto">
          <div className="flex items-center gap-2">
            <span
              className={`text-lg ${
                processingStep >= 1 ? "text-green-500" : "text-gray-400"
              }`}
            >
              ✔️
            </span>
            <span
              className={`font-medium ${
                processingStep >= 1 ? "text-white" : "text-gray-400"
              }`}
            >
              Analyzing property
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-lg ${
                processingStep >= 2 ? "text-green-500" : "text-gray-400"
              }`}
            >
              ✔️
            </span>
            <span
              className={`font-medium ${
                processingStep >= 2 ? "text-white" : "text-gray-400"
              }`}
            >
              Calculating value
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className={`text-lg ${
                processingStep === 3
                  ? "animate-spin text-primary"
                  : "text-gray-400"
              }`}
            >
              ◯
            </span>
            <span
              className={`font-medium ${
                processingStep === 3 ? "text-white" : "text-gray-400"
              }`}
            >
              Preparing results
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderFinalError = () => (
    <motion.div
      key="final-error"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={stepVariants}
    >
      <div className="w-full flex flex-col gap-8 items-center">
        <div className="flex items-center gap-2 text-yellow-400 text-2xl">
          <span>⚠️</span>
          <span className="font-bold">Oops!</span>
        </div>
        <p className="text-center text-white font-semibold">
          We couldn’t find enough verified data to estimate this property’s
          value right now.
        </p>
        <p className="text-center text-gray-300 text-sm">
          Try a nearby address or check back soon as we update our database
          weekly.
        </p>
        <button
          className="mt-2 px-6 py-2 bg-primary cursor-pointer text-white rounded-lg font-semibold"
          onClick={() => {
            setShowFinalError(false);
            setCurrentStep(1);
          }}
        >
          Try Another Address
        </button>
      </div>
    </motion.div>
  );

  return (
    <Layout>
      <div className="relative w-full  min-h-screen">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageVariants}
          className="absolute top-0 w-full h-64 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
        />

        <section className="relative z-10 pt-20 pb-12 max-sm:pt-12 max-sm:pb-8">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <h1 className="text-white text-5xl max-sm:text-3xl font-bold leading-tight">
                Discover Your Property’s True Value
              </h1>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <p className="text-gray-300 text-xl max-sm:text-base mt-4 max-w-2xl mx-auto">
                Get accurate and reliable estimates for your property’s market
                value, rental potential, or investment opportunities with our
                advanced valuation tool.
              </p>
            </motion.div>
            <motion.div variants={buttonVariants} className="mt-6">
              <Button
                className="bg-primary text-white text-base font-semibold px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
                onClick={() => setCurrentStep(1)}
              >
                Start Your Valuation
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto  py-12 max-sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={leftSectionVariants}
            >
              <h2 className="text-white text-4xl max-sm:text-2xl font-bold">
                Empower Your Real Estate Decisions
              </h2>
              <p className="text-gray-300 text-lg max-sm:text-base mt-4">
                Our cutting-edge valuation estimator provides clear, data-driven
                insights to help you make informed decisions whether you&apos;re
                buying, selling, or renting.
              </p>
              <p className="text-gray-300 text-lg max-sm:text-base mt-4">
                Input your property details, and let our tool analyze market
                trends, comparable properties, and local data to deliver a
                precise valuation.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={calculatorVariants}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-lg mx-auto">
                <h3 className="text-white text-center text-3xl max-sm:text-xl font-semibold mb-6">
                  Property Valuation Estimator
                </h3>
                <div className="flex justify-center gap-2 mb-8">
                  <div className="relative w-full max-w-xs">
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 bg-primary rounded-full transition-all duration-300"
                        style={{ width: `${(currentStep / 3) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      {[1, 2, 3].map((step) => (
                        <div
                          key={step}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                            currentStep >= step
                              ? "bg-primary text-white"
                              : "bg-gray-700 text-gray-300"
                          }`}
                        >
                          {step}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div variants={formVariants}>
                  {processing
                    ? renderProcessing()
                    : showFinalError
                    ? renderFinalError()
                    : renderStep()}
                </motion.div>{" "}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PropertyValuation;
