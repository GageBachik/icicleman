#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag === 'icicle'){
		Debug.Log('Body part destroyed coll!');
		}
}

function OnTriggerEnter2D(trig: Collider2D) {
		if (trig.gameObject.tag === 'icicle'){
		Debug.Log('Body part destroyed trig!');
		}
}