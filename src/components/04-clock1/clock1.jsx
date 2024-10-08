import React from "react";
import "../../assets/sass/clock.scss";
import moment from "moment";

export const Clock1 = () => {
	const dateTime = moment();
	const timeStr = dateTime.format("HH:mm");
	const dateStr = dateTime.format("LL");
	const dayStr = dateTime.format("dddd");
	const hourStr = dateTime.format("H");

	let message = "";
	if (hourStr >= 5 && hourStr < 12) {
		message = "Morning";
	} else if (hourStr >= 11 && hourStr < 14) {
		message = "Noon";
	} else if (hourStr >= 14 && hourStr < 18) {
		message = "Afternoon";
	} else if (hourStr >= 18 && hourStr < 22) {
		message = "Evening";
	} else {
		message = "Night";
	}

	return (
		<div className="clock-container">
			<div className="time">{timeStr}</div>
			<div>
				<div className="date">{dateStr}</div>
				<div className="day">
					{dayStr} {message}
				</div>

				

			</div>
		</div>
	);
};
