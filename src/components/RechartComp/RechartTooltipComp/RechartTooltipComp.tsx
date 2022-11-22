import React from "react";
import { TooltipProps } from "recharts";
import { format, parseISO } from "date-fns";
import "./RechartTooltipComp.css";

function RechartTooltipComp({
	active,
	payload,
	label,
}: TooltipProps<any, any>) {
	if (!active) return null;

	let value: any = payload?.[0].value ? payload?.[0].value : "";
	if (typeof value === "number") {
		value = value.toFixed(2);
	}

	return (
		<div className='tooltip'>
			<div className='tooltip__image'>
				<img src={payload?.[0].payload?.image} alt='' />
			</div>
			<p className='tooltip__label'>
				{format(parseISO(label), "eeee, d, MMM, yyyy")}
			</p>
			<p className='tooltip__value'>{`$${value}`}.</p>
			<p className='tooltip__desc'>{payload?.[0].payload?.description}.</p>
		</div>
	);
}

export default RechartTooltipComp;
