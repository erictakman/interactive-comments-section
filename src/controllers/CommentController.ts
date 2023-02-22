export class CommentController {
	constructor(
		public id: number, 
		public image: string,
    public username: string,
    public content: string,
    public createdAt: string,
    public score: number,
	) {}

	public getId() {
		return this.id;
	}

	public setContent(content: string) {
		this.content = content;
	}

	public handleUpdateButtons = () => {
		let updateButtons = document.querySelectorAll("button[data-update]");
		updateButtons.forEach(button => {
			button.addEventListener("click", () => {
				console.log("update");
				document.querySelector("[data-content]")!.innerHTML = "updated";
			})
		});
	}
}