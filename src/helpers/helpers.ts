import { dayWeeks } from './constants'

export function getDayOfWeek(dateString: string) {
	const date = new Date(dateString)
	const dayOfWeek = date.getDay()
	return dayWeeks[dayOfWeek - 1]
}
