import processWorkload from "../dto/report/workload";
import { input_workload_data_1, output_workload_data_1 } from "../__mocks__/data/workload";

describe("Functional Testing - Workload", () => {
	test("processWorkload - +ve", () => {
		expect(processWorkload(input_workload_data_1)).toEqual(output_workload_data_1);
	});

	test("processWorkload - -ve", () => {
		expect(processWorkload(input_workload_data_1)).not.toEqual(null);
	});
});
