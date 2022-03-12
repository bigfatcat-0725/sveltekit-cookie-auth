// @ts-nocheck
import cookie from 'cookie';

export function getSession(event) {
	return cookie.parse(event.request.headers.get('cookie') || '').session || null;
}
