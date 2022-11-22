import React from "react";
import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from "recharts";
import { parseISO, format } from "date-fns";
import RechartTooltipComp from "./RechartTooltipComp/RechartTooltipComp";

export interface IFakeData {
	date: string;
	value: number;
	description?: string;
	image?: string;
}

type RechartCompTypes = {
	fakeData: IFakeData[];
};

function RechartComp({ fakeData }: RechartCompTypes) {
	const getFormattedDate = (dateString: string): string => {
		const date = parseISO(dateString);
		if (date.getDate() % 7 === 0) return format(date, "MMM, d");
		return "";
	};

	const getFormattedValue = (value: number): string => {
		return `$${+value.toFixed(2)}`;
	};

	return (
		<ResponsiveContainer width='100%' height={300}>
			<AreaChart data={fakeData}>
				<defs>
					<linearGradient id='bgColor' x1='0' y1='0' x2='0' y2='1'>
						<stop offset='5%' stopColor='#a01989' stopOpacity={0.8} />
						<stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
					</linearGradient>
				</defs>
				<Area dataKey='value' stroke='#a01989' fill='url(#bgColor)' />
				<XAxis
					dataKey='date'
					axisLine={false}
					tickLine={false}
					tickFormatter={getFormattedDate}
					fontSize={12}
				/>
				<YAxis
					dataKey='value'
					axisLine={false}
					tickLine={false}
					tickCount={9}
					tickFormatter={getFormattedValue}
					fontSize={12}
				/>
				<Tooltip content={<RechartTooltipComp />} />
				<CartesianGrid opacity={0.1} vertical={false} strokeDasharray='5 5' />
			</AreaChart>
		</ResponsiveContainer>
	);
}

export default RechartComp;
