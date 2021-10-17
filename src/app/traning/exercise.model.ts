export interface Exercise {
 id: string,
 name: string,
 calories: number,
 duration: number,
 date?: Date,
 status?:  'completed' | 'canceled' | null
}
