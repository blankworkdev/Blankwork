CREATE TABLE `submission` (
	`id` text PRIMARY KEY NOT NULL,
	`taskId` text NOT NULL,
	`workerId` text NOT NULL,
	`solanaAddress` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`createdAt` integer
);
--> statement-breakpoint
CREATE TABLE `task` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`reward` integer NOT NULL,
	`creatorId` text NOT NULL,
	`status` text DEFAULT 'open' NOT NULL,
	`createdAt` integer
);
