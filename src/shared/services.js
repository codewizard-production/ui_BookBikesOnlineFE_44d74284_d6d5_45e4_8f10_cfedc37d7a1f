import Helper from "shared/helper";
import { apiUrl as serverApi } from "config";

const GetEntityInfo = async (name) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}${name}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}



 


	    
	 	
	
		
/* Verfications */

const GetVerficationsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Verfications/$count`;
        if (query) url = `${serverApi}Verfications/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetVerficationsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Verfications`;
        if (query) url = `${serverApi}Verfications?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetVerficationSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Verfications(${id})`;
        if (params) {
            url = `${serverApi}Verfications(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetVerficationSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.VerificationID;
        let method = "POST";
        let url = `${serverApi}Verfications`;
        if (input.VerificationID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Verfications(${input.VerificationID})`;
        } else if (input.VerificationID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Verfications(${input.VerificationID})`;
        }

        delete input['VerificationID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.VerificationID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* Payments */

const GetPaymentsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Payments/$count`;
        if (query) url = `${serverApi}Payments/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetPaymentsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Payments`;
        if (query) url = `${serverApi}Payments?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetPaymentSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Payments(${id})`;
        if (params) {
            url = `${serverApi}Payments(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetPaymentSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.PaymentID;
        let method = "POST";
        let url = `${serverApi}Payments`;
        if (input.PaymentID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Payments(${input.PaymentID})`;
        } else if (input.PaymentID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Payments(${input.PaymentID})`;
        }

        delete input['PaymentID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.PaymentID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* Customers */

const GetCustomersCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Customers/$count`;
        if (query) url = `${serverApi}Customers/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetCustomersMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Customers`;
        if (query) url = `${serverApi}Customers?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetCustomerSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Customers(${id})`;
        if (params) {
            url = `${serverApi}Customers(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetCustomerSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.CustomerID;
        let method = "POST";
        let url = `${serverApi}Customers`;
        if (input.CustomerID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Customers(${input.CustomerID})`;
        } else if (input.CustomerID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Customers(${input.CustomerID})`;
        }

        delete input['CustomerID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.CustomerID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   							// For Nested APIs
			/* $navPropName */

const SetCustomerBookingsJoin = async (input) => {     return new Promise(async (resolve) => {
        
        const { Id, CustomerID, BookingID, Deleted } = input;
        
        let method = "POST";
        let url = `${serverApi}CustomerBookingss`;
        let data = { BookingID, CustomerID: CustomerID };

        if (Id && !Deleted) {
            method = "PATCH";
            url = `${serverApi}CustomerBookingss(${Id})`;
        } else if (Id && Deleted) {
            method = "DELETE";
            data = {};
            url = `${serverApi}CustomerBookingss(${Id})`;
        }
        
        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, Id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetCustomerBookingsJoin = async (idValue) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}CustomerBookingss?$filter=CustomerID eq ${idValue}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		                        	   							// For Nested APIs
			/* $navPropName */

const SetCustomerReturnsJoin = async (input) => {     return new Promise(async (resolve) => {
        
        const { Id, CustomerID, BookingID, Deleted } = input;
        
        let method = "POST";
        let url = `${serverApi}CustomerReturnss`;
        let data = { BookingID, CustomerID: CustomerID };

        if (Id && !Deleted) {
            method = "PATCH";
            url = `${serverApi}CustomerReturnss(${Id})`;
        } else if (Id && Deleted) {
            method = "DELETE";
            data = {};
            url = `${serverApi}CustomerReturnss(${Id})`;
        }
        
        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, Id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetCustomerReturnsJoin = async (idValue) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}CustomerReturnss?$filter=CustomerID eq ${idValue}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		                        	   							// For Nested APIs
			/* $navPropName */

const SetCustomerExtendRentalJoin = async (input) => {     return new Promise(async (resolve) => {
        
        const { Id, CustomerID, BookingID, Deleted } = input;
        
        let method = "POST";
        let url = `${serverApi}CustomerExtendRentals`;
        let data = { BookingID, CustomerID: CustomerID };

        if (Id && !Deleted) {
            method = "PATCH";
            url = `${serverApi}CustomerExtendRentals(${Id})`;
        } else if (Id && Deleted) {
            method = "DELETE";
            data = {};
            url = `${serverApi}CustomerExtendRentals(${Id})`;
        }
        
        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, Id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetCustomerExtendRentalJoin = async (idValue) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}CustomerExtendRentals?$filter=CustomerID eq ${idValue}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		                        		
	
	    
	 	
	
		
/* Insurances */

const GetInsurancesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Insurances/$count`;
        if (query) url = `${serverApi}Insurances/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetInsurancesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Insurances`;
        if (query) url = `${serverApi}Insurances?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetInsuranceSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Insurances(${id})`;
        if (params) {
            url = `${serverApi}Insurances(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetInsuranceSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.InsuranceID;
        let method = "POST";
        let url = `${serverApi}Insurances`;
        if (input.InsuranceID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Insurances(${input.InsuranceID})`;
        } else if (input.InsuranceID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Insurances(${input.InsuranceID})`;
        }

        delete input['InsuranceID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.InsuranceID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* ServiceCrews */

const GetServiceCrewsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ServiceCrews/$count`;
        if (query) url = `${serverApi}ServiceCrews/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetServiceCrewsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ServiceCrews`;
        if (query) url = `${serverApi}ServiceCrews?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetServiceCrewSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ServiceCrews(${id})`;
        if (params) {
            url = `${serverApi}ServiceCrews(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetServiceCrewSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.ServiceID;
        let method = "POST";
        let url = `${serverApi}ServiceCrews`;
        if (input.ServiceID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}ServiceCrews(${input.ServiceID})`;
        } else if (input.ServiceID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}ServiceCrews(${input.ServiceID})`;
        }

        delete input['ServiceID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.ServiceID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* ReturnRentedBikes */

const GetReturnRentedBikesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ReturnRentedBikes/$count`;
        if (query) url = `${serverApi}ReturnRentedBikes/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetReturnRentedBikesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ReturnRentedBikes`;
        if (query) url = `${serverApi}ReturnRentedBikes?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetReturnRentedBikeSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ReturnRentedBikes(${id})`;
        if (params) {
            url = `${serverApi}ReturnRentedBikes(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetReturnRentedBikeSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.BookingID;
        let method = "POST";
        let url = `${serverApi}ReturnRentedBikes`;
        if (input.BookingID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}ReturnRentedBikes(${input.BookingID})`;
        } else if (input.BookingID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}ReturnRentedBikes(${input.BookingID})`;
        }

        delete input['BookingID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.BookingID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   							// For Nested APIs
			/* $navPropName */

const SetReturnRentedBikeInspectionJoin = async (input) => {     return new Promise(async (resolve) => {
        
        const { Id, BookingID, BikeID, Deleted } = input;
        
        let method = "POST";
        let url = `${serverApi}ReturnRentedBikeInspections`;
        let data = { BikeID, BookingID: BookingID };

        if (Id && !Deleted) {
            method = "PATCH";
            url = `${serverApi}ReturnRentedBikeInspections(${Id})`;
        } else if (Id && Deleted) {
            method = "DELETE";
            data = {};
            url = `${serverApi}ReturnRentedBikeInspections(${Id})`;
        }
        
        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, Id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetReturnRentedBikeInspectionJoin = async (idValue) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}ReturnRentedBikeInspections?$filter=BookingID eq ${idValue}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		                        		
	
	    
	 	
	
		
/* Bookings */

const GetBookingsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Bookings/$count`;
        if (query) url = `${serverApi}Bookings/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetBookingsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Bookings`;
        if (query) url = `${serverApi}Bookings?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetBookingSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Bookings(${id})`;
        if (params) {
            url = `${serverApi}Bookings(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetBookingSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.BookingID;
        let method = "POST";
        let url = `${serverApi}Bookings`;
        if (input.BookingID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Bookings(${input.BookingID})`;
        } else if (input.BookingID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Bookings(${input.BookingID})`;
        }

        delete input['BookingID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.BookingID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   	   	   	   	   		
	
	    
	 	
	
		
/* RoadsideAssistances */

const GetRoadsideAssistancesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}RoadsideAssistances/$count`;
        if (query) url = `${serverApi}RoadsideAssistances/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetRoadsideAssistancesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}RoadsideAssistances`;
        if (query) url = `${serverApi}RoadsideAssistances?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetRoadsideAssistanceSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}RoadsideAssistances(${id})`;
        if (params) {
            url = `${serverApi}RoadsideAssistances(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetRoadsideAssistanceSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.CustomerID;
        let method = "POST";
        let url = `${serverApi}RoadsideAssistances`;
        if (input.CustomerID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}RoadsideAssistances(${input.CustomerID})`;
        } else if (input.CustomerID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}RoadsideAssistances(${input.CustomerID})`;
        }

        delete input['CustomerID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.CustomerID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   		
	
	    
	 	
	
		
/* ExtendBookings */

const GetExtendBookingsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ExtendBookings/$count`;
        if (query) url = `${serverApi}ExtendBookings/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetExtendBookingsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ExtendBookings`;
        if (query) url = `${serverApi}ExtendBookings?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetExtendBookingSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ExtendBookings(${id})`;
        if (params) {
            url = `${serverApi}ExtendBookings(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetExtendBookingSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.BookingID;
        let method = "POST";
        let url = `${serverApi}ExtendBookings`;
        if (input.BookingID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}ExtendBookings(${input.BookingID})`;
        } else if (input.BookingID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}ExtendBookings(${input.BookingID})`;
        }

        delete input['BookingID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.BookingID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   		
	
	    
	 	
	
		
/* RentalCompanies */

const GetRentalCompaniesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}RentalCompanies/$count`;
        if (query) url = `${serverApi}RentalCompanies/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetRentalCompaniesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}RentalCompanies`;
        if (query) url = `${serverApi}RentalCompanies?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetRentalCompanySingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}RentalCompanies(${id})`;
        if (params) {
            url = `${serverApi}RentalCompanies(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetRentalCompanySingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.CompanyID;
        let method = "POST";
        let url = `${serverApi}RentalCompanies`;
        if (input.CompanyID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}RentalCompanies(${input.CompanyID})`;
        } else if (input.CompanyID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}RentalCompanies(${input.CompanyID})`;
        }

        delete input['CompanyID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.CompanyID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
   							// For Nested APIs
			/* $navPropName */

const SetRentalCompanyBikesJoin = async (input) => {     return new Promise(async (resolve) => {
        
        const { Id, CompanyID, BikeID, Deleted } = input;
        
        let method = "POST";
        let url = `${serverApi}RentalCompanyBikess`;
        let data = { BikeID, CompanyID: CompanyID };

        if (Id && !Deleted) {
            method = "PATCH";
            url = `${serverApi}RentalCompanyBikess(${Id})`;
        } else if (Id && Deleted) {
            method = "DELETE";
            data = {};
            url = `${serverApi}RentalCompanyBikess(${Id})`;
        }
        
        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, Id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetRentalCompanyBikesJoin = async (idValue) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}RentalCompanyBikess?$filter=CompanyID eq ${idValue}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		                        	   							// For Nested APIs
			/* $navPropName */

const SetRentalCompanyCustomersJoin = async (input) => {     return new Promise(async (resolve) => {
        
        const { Id, CompanyID, CustomerID, Deleted } = input;
        
        let method = "POST";
        let url = `${serverApi}RentalCompanyCustomerss`;
        let data = { CustomerID, CompanyID: CompanyID };

        if (Id && !Deleted) {
            method = "PATCH";
            url = `${serverApi}RentalCompanyCustomerss(${Id})`;
        } else if (Id && Deleted) {
            method = "DELETE";
            data = {};
            url = `${serverApi}RentalCompanyCustomerss(${Id})`;
        }
        
        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, Id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetRentalCompanyCustomersJoin = async (idValue) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}RentalCompanyCustomerss?$filter=CompanyID eq ${idValue}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		                        	   							// For Nested APIs
			/* $navPropName */

const SetRentalCompanyBookingsJoin = async (input) => {     return new Promise(async (resolve) => {
        
        const { Id, CompanyID, BookingID, Deleted } = input;
        
        let method = "POST";
        let url = `${serverApi}RentalCompanyBookingss`;
        let data = { BookingID, CompanyID: CompanyID };

        if (Id && !Deleted) {
            method = "PATCH";
            url = `${serverApi}RentalCompanyBookingss(${Id})`;
        } else if (Id && Deleted) {
            method = "DELETE";
            data = {};
            url = `${serverApi}RentalCompanyBookingss(${Id})`;
        }
        
        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.Id });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, Id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetRentalCompanyBookingsJoin = async (idValue) => {     return new Promise(async (resolve) => {
        let url = `${serverApi}RentalCompanyBookingss?$filter=CompanyID eq ${idValue}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json?.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

		                        		
	
	    
	 	
	
		
/* ReturnBikeInspections */

const GetReturnBikeInspectionsCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ReturnBikeInspections/$count`;
        if (query) url = `${serverApi}ReturnBikeInspections/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetReturnBikeInspectionsMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ReturnBikeInspections`;
        if (query) url = `${serverApi}ReturnBikeInspections?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetReturnBikeInspectionSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}ReturnBikeInspections(${id})`;
        if (params) {
            url = `${serverApi}ReturnBikeInspections(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetReturnBikeInspectionSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.BikeID;
        let method = "POST";
        let url = `${serverApi}ReturnBikeInspections`;
        if (input.BikeID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}ReturnBikeInspections(${input.BikeID})`;
        } else if (input.BikeID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}ReturnBikeInspections(${input.BikeID})`;
        }

        delete input['BikeID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.BikeID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
	    
	 	
	
		
/* Bikes */

const GetBikesCount = async (query) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}Bikes/$count`;
        if (query) url = `${serverApi}Bikes/$count?${query}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || 0 });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    })
}

const GetBikesMulti = async (query, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Bikes`;
        if (query) url = `${serverApi}Bikes?${query}`;

        if (expands && query) url = `${url}&$expand=${expands}`;
        if (expands && !query) url = `${url}?$expand=${expands}`;
        
        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const GetBikeSingle = async (id, params, expands) => {     return new Promise(async (resolve) => {

        let url = `${serverApi}Bikes(${id})`;
        if (params) {
            url = `${serverApi}Bikes(${id})?${params}`;
        }
        if (expands) url = params ? `${url}&$expand=${expands}` : `${url}?&$expand=${expands}`;
        
        try {
			const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json || [] });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

const SetBikeSingle = async (input) => {     return new Promise(async (resolve) => {
        let id = input.BikeID;
        let method = "POST";
        let url = `${serverApi}Bikes`;
        if (input.BikeID && !input.Deleted) {
            method = "PATCH";
            url = `${serverApi}Bikes(${input.BikeID})`;
        } else if (input.BikeID && input.Deleted) {
            method = "DELETE";
            url = `${serverApi}Bikes(${input.BikeID})`;
        }

        delete input['BikeID'];
        delete input['Deleted'];

        try {
            const res = await fetch(url, {
                method, body: JSON.stringify(input),
                headers: {
                    "Content-type": "application/json"
                }
            });

            if (res.status === 201) {
                const json = await res.json();
                return resolve({ status: res.ok, id: json.BikeID });
            } else if (res.status === 200 || res.status === 204) {
                return resolve({ status: res.ok, id });
            } else {
                const json = await res.json();
                return resolve({ status: false, statusText: json.error.message });
            }

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}
     
	        	
	
	
 


// Below is a reference function - a possible business logic for ecom reference app
const GetProductStatus = async (productId) => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ProductOnBoardings?$filter=ProductId eq ${productId}`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                let _tmp = { Status: '' };
                if (json.value && json.value.length > 0) {
                    _tmp = json.value[0];
                }
                return resolve({ status: res.ok, values: _tmp });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}




const GetMetaData = async () => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}$metadata`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });
            if (res.status === 200) {
                const values = await res.text();
                return resolve({ status: res.ok, values });
            }

            return resolve({ status: false, statusText: "Failed fetching data" });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

/* Prodict List View Details */
const GetProductOnBoardings = async () => {
    return new Promise(async (resolve) => {
        let url = `${serverApi}ProductOnBoardings`;

        try {
            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            });

            const json = await res.json();
            if (res.status === 200) {
                return resolve({ status: res.ok, values: json.value });
            }

            return resolve({ status: false, statusText: json.error.message });

        } catch (error) {
            console.log(error);
            return resolve({ status: false, statusText: error.message });
        }
    });
}

export {
 GetEntityInfo,  GetVerficationsCount, GetVerficationsMulti, GetVerficationSingle, SetVerficationSingle, GetPaymentsCount, GetPaymentsMulti, GetPaymentSingle, SetPaymentSingle, GetCustomersCount, GetCustomersMulti, GetCustomerSingle, SetCustomerSingle, SetCustomerBookingsJoin, GetCustomerBookingsJoin, SetCustomerReturnsJoin, GetCustomerReturnsJoin, SetCustomerExtendRentalJoin, GetCustomerExtendRentalJoin, GetInsurancesCount, GetInsurancesMulti, GetInsuranceSingle, SetInsuranceSingle, GetServiceCrewsCount, GetServiceCrewsMulti, GetServiceCrewSingle, SetServiceCrewSingle, GetReturnRentedBikesCount, GetReturnRentedBikesMulti, GetReturnRentedBikeSingle, SetReturnRentedBikeSingle, SetReturnRentedBikeInspectionJoin, GetReturnRentedBikeInspectionJoin, GetBookingsCount, GetBookingsMulti, GetBookingSingle, SetBookingSingle, GetRoadsideAssistancesCount, GetRoadsideAssistancesMulti, GetRoadsideAssistanceSingle, SetRoadsideAssistanceSingle, GetExtendBookingsCount, GetExtendBookingsMulti, GetExtendBookingSingle, SetExtendBookingSingle, GetRentalCompaniesCount, GetRentalCompaniesMulti, GetRentalCompanySingle, SetRentalCompanySingle, SetRentalCompanyBikesJoin, GetRentalCompanyBikesJoin, SetRentalCompanyCustomersJoin, GetRentalCompanyCustomersJoin, SetRentalCompanyBookingsJoin, GetRentalCompanyBookingsJoin, GetReturnBikeInspectionsCount, GetReturnBikeInspectionsMulti, GetReturnBikeInspectionSingle, SetReturnBikeInspectionSingle, GetBikesCount, GetBikesMulti, GetBikeSingle, SetBikeSingle, GetProductStatus, GetMetaData, GetProductOnBoardings
};
