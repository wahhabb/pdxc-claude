import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData();

		const firstName = formData.get('firstName')?.toString().trim() || '';
		const lastName = formData.get('lastName')?.toString().trim() || '';
		const email = formData.get('email')?.toString().trim() || '';
		const telephone = formData.get('telephone')?.toString().trim() || '';
		const location = formData.get('location')?.toString().trim() || '';
		const referral = formData.get('referral')?.toString().trim() || '';
		const mailingList = formData.get('mailingList') === 'yes';
		const message = formData.get('message')?.toString().trim() || '';

		// Honeypot field for spam protection
		const honeypot = formData.get('website')?.toString() || '';
		if (honeypot) {
			// Bot detected - silently succeed to not give feedback to bots
			return { success: true };
		}

		// Validation
		const errors: Record<string, string> = {};

		if (!firstName) {
			errors.firstName = 'First name is required';
		}

		if (!lastName) {
			errors.lastName = 'Last name is required';
		}

		if (!email) {
			errors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email address';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				errors,
				values: { firstName, lastName, email, telephone, location, referral, mailingList, message }
			});
		}

		// In production, you would send the email here using a service like:
		// - SendGrid
		// - Mailgun
		// - Resend
		// - Or use a form service like Formspree, Netlify Forms, etc.

		// For now, log the submission (in production, replace with actual email sending)
		console.log('Contact form submission:', {
			firstName,
			lastName,
			email,
			telephone,
			location,
			referral,
			mailingList,
			message,
			timestamp: new Date().toISOString()
		});

		return {
			success: true,
			message: 'Thank you for your message! We will get back to you soon.'
		};
	}
};
