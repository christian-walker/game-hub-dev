import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <HStack>
        <Skeleton height="32px" width="32px" />
        <SkeletonText />
    </HStack>
  )
}

export default GenreCardSkeleton