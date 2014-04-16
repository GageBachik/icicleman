#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerExit2D (coll : Collider2D) {
		if(coll.gameObject.tag == 'bottomWall') {
			Score.score();
			Destroy(this.gameObject);
		} else if (coll.gameObject.tag == 'limb'){
			Destroy(coll.gameObject);
		}
		
}