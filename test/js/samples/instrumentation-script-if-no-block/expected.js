/* generated by Svelte vX.Y.Z */
import {
	SvelteComponent,
	append,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal,
	set_data,
	space,
	text
} from "svelte/internal";

function create_fragment(ctx) {
	var button, t1, p, t2, t3, dispose;

	return {
		c() {
			button = element("button");
			button.textContent = "foo";
			t1 = space();
			p = element("p");
			t2 = text("x: ");
			t3 = text(ctx.x);
			dispose = listen(button, "click", ctx.foo);
		},

		m(target, anchor) {
			insert(target, button, anchor);
			insert(target, t1, anchor);
			insert(target, p, anchor);
			append(p, t2);
			append(p, t3);
		},

		p(changed, ctx) {
			if (changed.x) {
				set_data(t3, ctx.x);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(button);
				detach(t1);
				detach(p);
			}

			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let x = 0;

	function foo() {
		if (true) $$invalidate('x', x += 1);
	}

	return { x, foo };
}

class Component extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Component;