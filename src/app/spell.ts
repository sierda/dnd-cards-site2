export class Spell {
    public name: string;
    public type: string;
    public casting_time: string;
    public range: string;
    public components: string;
    public duration: string;
    public primary_description: string;
    public level: number;
}
export interface SpellResponse {
  result: Spell;
}

