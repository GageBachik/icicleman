#pragma strict

static var finalScore : int = 0;
function Start () {
	var myRigidBody : Rigidbody2D = GetComponent(Rigidbody2D);
		myRigidBody.gravityScale = Random.Range(0.01,0.5);
}

function OnTriggerExit2D (coll : Collider2D) {
		if(coll.gameObject.tag == 'bottomWall') {
			Score.score();
			Destroy(this.gameObject);
		} else if (coll.gameObject.tag == 'limb'){
			Destroy(coll.gameObject);
		} else if (coll.gameObject.tag == 'vital'){
			finalScore = Score.getScore();
			Debug.Log(finalScore);
			Destroy(coll.gameObject);
			Application.LoadLevel('game');
			Score.resetScore();
		}
		
}