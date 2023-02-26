import { z } from "zod";

export const ValidateVideo = z.object({
  response: z.array(
    z.object({
      title: z.string(),
      competition: z.string().optional(),
      matchviewUrl: z.string().optional(),
      competitionUrl: z.string().optional(),
      thumbnail: z.string().optional(),
      date: z.string().optional(),
      videos: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          embed: z.string(),
        })
      ),
    })
  ),
});

export type VideoType = z.infer<typeof ValidateVideo>;

export const ValidateCompetition = z.object({
  competition: z.object({
    id: z.number(),
    name: z.string(),
    code: z.string(),
    type: z.string(),
    emblem: z.string(),
  }),
  standings: z.array(
    z.object({
      table: z.array(
        z.object({
          position: z.number(),
          team: z.object({
            id: z.number(),
            name: z.string(),
            shortName: z.string(),
            crest: z.string().optional(),
          }),
          playedGames: z.number(),
          form: z.string().optional(),
          won: z.number().optional(),
          draw: z.number().optional(),
          lost: z.number().optional(),
          points: z.number(),
        })
      ),
    })
  ),
});

export type CompetitonType = z.infer<typeof ValidateCompetition>;